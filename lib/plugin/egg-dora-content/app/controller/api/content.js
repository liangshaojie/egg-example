const _ = require('lodash');
const shortid = require('shortid');
let ContentController = {
    async getEnableCateList(ctx, isSingerPage) {
        try {
            const enableCates = await ctx.service.contentCategory.find({
                isPaging: '0'
            }, {
                query: {
                    enable: true,
                    type: isSingerPage ? '2' : '1'
                },
                files: 'id'
            })
            let queryCate = enableCates.map((item, index) => {
                // const reg = new RegExp(item.id, 'i')
                // return {
                //     categories: {
                //         $regex: reg
                //     }
                // }
                return item.id;
            })
            return queryCate;

        } catch (error) {
            return []
        }
    },


    renderContentList(ctx, userId = "", contentList = []) {
        // 暂停一下后面再去研究
        return new Promise(async(resolve, reject) => {
            try {
                let newContentList = JSON.parse(JSON.stringify(contentList));
                let userInfo;
                if (userId) {
                    userInfo = await ctx.service.user.item(ctx, {
                        query: {
                            _id: userId
                        },
                        files: getAuthUserFields('session')
                    })
                }
                for (let contentItem of newContentList) {
                    contentItem.id = contentItem._id;
                    contentItem.hasPraised = false;
                    contentItem.hasComment = false;
                    contentItem.hasFavorite = false;
                    contentItem.hasDespise = false;
                    contentItem.uAuthor && (contentItem.uAuthor.had_followed = false);
                    if (!_.isEmpty(userInfo)) {
                        // 本人是否已点赞
                        if (userInfo.praiseContents && userInfo.praiseContents.indexOf(contentItem._id) >= 0) {
                            contentItem.hasPraised = true;
                        }
                        // 本人是否已收藏
                        if (userInfo.favorites && userInfo.favorites.indexOf(contentItem._id) >= 0) {
                            contentItem.hasFavorite = true;
                        }
                        // 本人是否已踩
                        if (userInfo.despises && userInfo.despises.indexOf(contentItem._id) >= 0) {
                            contentItem.hasDespise = true;
                        }
                        // 本人是否已留言
                        let contentMessage = await ctx.service.message.item(ctx, {
                            query: {
                                contentId: contentItem._id,
                                author: userInfo._id
                            }
                        })
                        if (!_.isEmpty(contentMessage)) {
                            contentItem.hasComment = true;
                        }
                        // 本人是否已关注作者
                        if (userInfo.watchers.length > 0 && contentItem.uAuthor && userInfo.watchers.indexOf(contentItem.uAuthor._id) >= 0) {
                            contentItem.uAuthor.had_followed = true;
                        }
                    }
                    // 留言总数
                    let commentNum = await ctx.service.message.count({
                        contentId: contentItem._id
                    });
                    contentItem.commentNum = commentNum;
                    // 点赞总数
                    let likeNum = await ctx.service.user.count({
                        praiseContents: contentItem._id
                    })
                    contentItem.likeNum = likeNum;

                    // 收藏总数
                    let favoriteNum = await ctx.service.user.count({
                        favorites: contentItem._id
                    })
                    contentItem.favoriteNum = favoriteNum;

                    // 踩帖总数
                    let despiseNum = await ctx.service.user.count({
                        despises: contentItem._id
                    });
                    contentItem.despiseNum = despiseNum;

                    if (contentItem.simpleComments) {
                        contentItem.simpleComments = JSON.parse(contentItem.simpleComments);
                    }
                    // 处理用户敏感信息
                    contentItem.uAuthor && siteFunc.clearUserSensitiveInformation(contentItem.uAuthor);
                }
                resolve(newContentList);
            } catch (error) {
                resolve([]);
            }
        })

    },
    /**
     * @api {get} /api/content/getList 查询帖子列表
     * @apiDescription 根据参数获取对应的帖子列表,默认按时间查询，可作为发现栏目列表
     * @apiName /content/getList
     * @apiGroup Content
     * @apiParam {string} current 当前页码
     * @apiParam {string} pageSize 每页记录数
     * @apiParam {string} searchkey 搜索关键字
     * @apiParam {string} userId 指定作者ID
     * @apiParam {string} model (1:推荐帖子)
     * @apiParam {string} sortby 按字段排序(0:默认按时间，1:热门)
     * @apiSuccess {json} result
     * @apiSuccessExample {json} Success-Response:
     *{
     *   "status": 200,
     *   "message": "contentlist",
     *   "server_time": 1542380520270,
     *   "data": [
     *       {
     *           "_id": "Y1XFYKL52",
     *           "title": "如何优化vue的内存占用？",
     *           "stitle": "如何优化vue的内存占用？",
     *           "sortPath": "",
     *           "keywords": "",
     *           "author": {
     *               "_id": "4JiWCMhzg",
     *               "userName": "doramart",
     *               "name": "生哥",
     *               "logo": "/upload/smallimgs/img1448202744000.jpg"
     *           },
     *           "discription": "在使用了一段时间的vue.js开发移动端h5页面（电商类页面，会有一些数据量较大但一次渲染就可以的商品列表）后",
     *           "comments": "在使用了一段时间的vue.js开发移动端h5页面（电商类页面，会有一些数据量较大但一次渲染就可以的商品列表）后，感觉相比于传统的jquery（zepto）和前端模板引擎的组合能有效的提升开发效率和代码维护性，但是也存在一些问题，比如说内存占用问题，用vue.js开发的页面内存占用相比于传统方式会更多，而且传统的开发方式页面渲染完后，还能对不需要的js对象进行垃圾回收，但vue.js里面的一些指令对象、watcher对象、data数据等似乎目前都没有找到比较好的垃圾回收的方式。想问下对于那些只用渲染一次的页面部分（比如数据量较大的列表页）有没有比较合适的内存优化方案（比如释放指令对象、watcher对象、data对象）？举个例子：比如其中的lazy指令，以及对于items这个基本上只用渲染一次的data等有没有可以优化内存占用的方法",
     *           "translate": "",
     *           "bearish": [],
     *           "profitable": [],
     *           "from": "1",
     *           "likeUserIds": [],
     *           "likeNum": 0, // 点赞总数
     *           "commentNum": 0, // 留言总数
     *           "favoriteNum": 0, // 收藏总数
     *           "despiseNum": 0, // 踩帖总数
     *           "clickNum": 1,
     *           "isTop": 0,
     *           "state": true,
     *           "updateDate": "2018-11-16",
     *           "date": "2018-11-16 23:00:16",
     *           "appShowType": "0", // app端展示模式 0，1，2，3
     *           "duration": "0:01",, // 针对视频的视频时长
     *           "sImg": "/upload/images/img20181116225948.jpeg",
     *           "tags": [
     *               {
     *                "_id": "Y3DTgmHK3",
     *                "name": "区块链",
     *                "date": "2018-11-16 23:02:00",
     *                "id": "Y3DTgmHK3"
     *                }
     *            ],
     *           "categories": [
     *                {
     *                "_id": "Nycd05pP",
     *                "name": "人工智能",
     *                "defaultUrl": "artificial-intelligence",
     *                "enable": true,
     *                "date": "2018-11-16 23:02:00",
     *                "id": "Nycd05pP"
     *                }
     *            ],
     *           "type": "1",
     *           "id": "Y1XFYKL52"
     *           "hasPraised": false // 当前用户是否已赞�
     *           "hasReworded": false // 当前用户是否已打赏�
     *           "hasComment": false // 当前用户是否已评论
     *           "hasFavorite": false // 当前用户是否已收藏
     *           "hasDespise": false // 当前用户是否已踩
     *           "total_reward_num": 0  // 打赏总额
     *        }
     *    ]
     *}
     * @apiSampleRequest http://localhost:9090/api/content/getList
     * @apiVersion 1.0.0
     */
    /**
     * @api {get} /api/content/getUserContents 查询指定用户的文档列表
     * @apiDescription 查询指定用户的文档列表，带分页
     * @apiName /content/getUserContents
     * @apiGroup Content
     * @apiParam {string} current 当前页码
     * @apiParam {string} pageSize 每页记录数
     * @apiParam {string} userId 指定用户的ID
     * @apiParam {string} listState 针对本人可以根据状态显示文档列表(all:全部)
     * @apiParam {string} token 登录时返回的参数鉴权
     * @apiSuccess {json} result
     * @apiSuccessExample {json} Success-Response:
     *{
     *  "status": 200,
     *  "message": "contentlist",
     *  "server_time": 1542891752268,
     *  "data": [
     *    {
     *      "_id": "jRInYUowi",
     *      "title": "六小龄童做了什么事引来这么多的口诛笔伐？",
     *      "stitle": "六小龄童做了什么事引来这么多的口诛笔伐？",
     *      "author": null,
     *      "discription": "蓉城圆滚滚： 今天上午刚好听完六小龄童的现场讲座，有视频有真相，还是先附上一段现场版视频吧～ 这是我们省图书馆的一个讲座系列活动，叫“巴蜀讲坛”。通常会在周末邀请很多知名专家学者给大家做一些学术或者科普讲…",
     *      "comments": "9:00的时候开始入场，我虽然到的挺早，但还是只在报告厅的倒数第二排的角落里找到了个位置～大家陆续进场后，工作人员就开始在台上频繁地说：讲座结束后，章老师会有签名活动，为了避免拥挤，大家现在就可以在报告厅门口去购书～～（其实省图挺少接这种签售活动，就算接，一般也是安排在楼上的小活动室里，而不会在这个大报告厅，果然明星还是比较有面儿的哇～）讲座准时开始的，第一个环节是捐赠仪式，大约是捐赠了6套还是8套章老师的书给图书馆来着↓↓↓（红色衣服的是章老师，旁边那位是图书馆某个部门的主任～其实，我大约记得之前几位第一次来馆里办讲座的老师都是副馆长来致欢迎词的～）",
     *      "uAuthor": {
     *        "_id": "zwwdJvLmP",
     *        "userName": "doramart",
     *        "logo": "/upload/images/defaultlogo.png",
     *        "date": "2018-11-22 21:02:32",
     *        "id": "zwwdJvLmP"
     *      },
     *      "__v": 0,
     *      "keywords": null,
     *      "likeNum": 0, // 点赞总数
     *      "commentNum": 0, // 留言总数
     *      "favoriteNum": 0, // 收藏总数
     *      "despiseNum": 0, // 踩帖总数
     *      "clickNum": 1,  
     *      "isTop": 1,
     *      "state": true,
     *      "updateDate": "2018-11-18",
     *      "date": "2018-11-18 20:49:29",
     *      "appShowType": "0",
     *      "sImg": "/upload/images/img20181118203911.jpeg",
     *      "tags": [
     *        
     *      ],
     *      "categories": [
     *        
     *      ],
     *      "type": "1",
     *      "id": "jRInYUowi"
     *      "hasPraised": false // 当前用户是否已赞�
     *      "total_reward_num": 0  // 打赏总额
     *      "hasReworded": false // 当前用户是否已打赏�
     *      "hasComment": false // 当前用户是否已评论
     *      "hasFavorite": false // 当前用户是否已收藏
     *      "hasDespise": false // 当前用户是否已踩
     *    },
     *    ...
     *  ]
     *}
     * @apiSampleRequest http://localhost:9090/api/content/getUserContents
     * @apiVersion 1.0.0
     */
    async list(ctx, app) {
        try {
            let payload = ctx.query;
            let userId = ctx.query.userId;
            let userInfo = ctx.session.user || {};
            let model = ctx.query.model;
            let sortby = ctx.query.sortby;
            let listState = ctx.query.listState || '2';
            let typeId = ctx.query.typeId;
            let tagName = ctx.query.tagName;
            let filesType = 'normal'; // 查询模式 full/normal/simple
            let isSingerPage = false; // 是否是单页面
            let queryObj = {
                    state: '2'
                },
                sortObj = {
                    date: -1
                };

            if (ctx.query.pageType == 'index') {
                sortObj = {
                    roofPlacement: -1,
                    date: -1
                };
            }

            if (model == '1') {
                queryObj.isTop = 1;
            }


            if (tagName) {
                let targetTag = await ctx.service.contentTag.item(ctx, {
                    query: {
                        name: tagName
                    }
                });
                if (!_.isEmpty(targetTag)) {
                    queryObj.tags = targetTag._id;
                    delete queryObj.categories;
                }
            }


            if (sortby == '1') { // 按点击量排序
                delete sortObj.date;
                delete sortObj.roofPlacement;
                sortObj = {
                    clickNum: 1
                }
                let rangeTime = getDateStr(-720);
                queryObj.date = {
                    "$gte": new Date(rangeTime.startTime),
                    "$lte": new Date(rangeTime.endTime)
                }
            }

            // 如果是本人，返回所有文档
            if (!_.isEmpty(userInfo) && userInfo._id == userId) {
                queryObj.uAuthor = userInfo._id;
                if (listState == 'all') {
                    delete queryObj.state;
                } else {
                    if (listState == '0' || listState == '1' || listState == '2') {
                        queryObj.state = listState;
                    }
                }
            } else {
                userId && (queryObj.uAuthor = userId);
            }
            if (typeId) {
                queryObj.categories = typeId
                _.assign(queryObj, {
                    categories: typeId
                });
                // 针对顶级分类下挂载的文章
                let singerCate = await ctx.service.contentCategory.count({
                    _id: typeId,
                    enable: true,
                    type: '2'
                });
                if (singerCate > 0) {
                    filesType = 'stage1';
                    isSingerPage = true;
                    let ableCateList = await this.getEnableCateList(ctx, isSingerPage);
                    _.assign(queryObj, {
                        categories: {
                            $in: ableCateList
                        }
                    });
                }
            } else {
                // 只查询可见分类的文章
                let ableCateList = await this.getEnableCateList(ctx, false);
                _.assign(queryObj, {
                    categories: {
                        $in: ableCateList
                    }
                });
            }
            // console.log('--sortObj--', sortObj);
            let contentList = await ctx.service.content.find(payload, {
                sort: sortObj,
                query: queryObj,
                searchKeys: ['userName', 'title', 'comments', 'discription'],
                files: getContentListFields(filesType)
            });
            contentList.docs = await this.renderContentList(ctx, userInfo._id, contentList.docs);
            ctx.helper.renderSuccess(ctx, {
                data: contentList
            });
        } catch (err) {
            ctx.helper.renderFail(ctx, {
                message: err
            });
        }
    }
}

module.exports = ContentController;