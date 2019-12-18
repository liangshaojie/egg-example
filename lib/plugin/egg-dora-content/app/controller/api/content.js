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
        debugger
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