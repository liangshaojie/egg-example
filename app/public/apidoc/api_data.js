define({ "api": [
  {
    "type": "get",
    "url": "/api/ads/getOne",
    "title": "查找指定位置 banner",
    "description": "<p>根据ID获取广告(单图或轮播图),包含后台自定义的名称 注意：返回结果中如果 state=true 才显示</p>",
    "name": "_ads_getOne",
    "group": "Ads",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>广告位名称（anli/案例）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": 200,\n    \"message\": \"ads\",\n    \"server_time\": 1542116428394,\n    \"data\": {\n      \"_id\": \"kYMDJLFDcb\",\n      \"name\": \"creatorClass\",\n      \"comments\": \"创作者课顶部轮播图\",\n      \"__v\": 0,\n      \"items\": [\n        {\n          \"_id\": \"MXoW1aBxk\",\n          \"title\": \"\",\n          \"link\": \"https://creatorchain.work\",\n          \"appLink\": \"MXoW1aBxk\", // app链接（文章id或普通url）\n          \"appLinkType\": \"0\", // app链接形式 0 文章，1 普通链接\n          \"width\": null,\n          \"alt\": \"发现ads1\",\n          \"sImg\": \"/upload/images/img20181113213438.jpg\",\n          \"__v\": 0,\n          \"date\": \"2018-11-13T13:34:56.988Z\",\n          \"target\": \"_blank\",\n          \"height\": null\n        },\n        {\n          \"_id\": \"h8YuPIf6Aj\",\n          \"title\": \"\",\n          \"link\": \"https://creatorchain.work\",\n          \"appLink\": \"MXoW1aBxk\", // app链接（文章id或普通url）\n          \"appLinkType\": \"0\", // app链接形式 0 文章，1 普通链接\n          \"width\": null,\n          \"alt\": \"发现ads2\",\n          \"sImg\": \"/upload/images/img20181113213454.jpg\",\n          \"__v\": 0,\n          \"date\": \"2018-11-13T13:34:56.991Z\",\n          \"target\": \"_blank\",\n          \"height\": null\n        }\n      ],\n      \"date\": \"2018-11-13 21:34:56\",\n      \"height\": null,\n      \"state\": true,\n      \"carousel\": true,\n      \"type\": \"1\",\n      \"id\": \"kYMDJLFDcb\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://www.html-js.cn/api/ads/getOne"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-ads/app/controller/api/ads.js",
    "groupTitle": "Ads"
  },
  {
    "type": "get",
    "url": "/api/contentCategory/getList",
    "title": "获取文档类别列表",
    "description": "<p>获取文档类别列表</p>",
    "name": "_contentCategory_getList",
    "group": "ContentCategory",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"status\": 200,\n   \"message\": \"addContent\",\n   \"server_time\": 1548037382973,\n   \"data\": [{\n         \"_id\": \"E1lagiaw\",\n         \"name\": \"NodeJs\",\n         \"keywords\": \"NodeJs,前端开发，全栈开发，前端开发工程师\",\n         \"comments\": \"NodeJs相关技术文档、教程\",\n         \"contentTemp\": \"\",\n         \"state\": \"1\",\n         \"__v\": 0,\n         \"sortPath\": \"0,Nycd05pP,E1lagiaw\",\n         \"homePage\": \"NodeJs\",\n         \"defaultUrl\": \"front-development/NodeJs\",\n         \"date\": \"2015-07-05 00:03:15\",\n         \"enable\": true,\n         \"parentId\": \"Nycd05pP\",\n         \"sortId\": 1,\n         \"type\": \"1\",\n         \"uid\": 0,\n         \"id\": \"E1lagiaw\"\n   },\n   ...\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://www.html-js.cn/api/contentCategory/getList"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-contentcategory/app/controller/api/contentCategory.js",
    "groupTitle": "ContentCategory"
  },
  {
    "type": "get",
    "url": "/api/contentMessage/getMessages",
    "title": "获取评论列表",
    "description": "<p>获取评论列表 带分页</p>",
    "name": "_contentMessage_getMessages",
    "group": "ContentMessage",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "current",
            "description": "<p>当前页码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页记录数</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>获取指定用户的评论,传用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "contentId",
            "description": "<p>获取指定文章的评论,传文档id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>登录时返回的参数鉴权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"status\": 200,\n \"message\": \"操作成功 message\",\n \"server_time\": 1542899024811,\n \"data\": [\n   {\n \"_id\": \"tYVGV-HTL\",\n \"author\": {\n    \"_id\": \"zwwdJvLmP\",\n    \"userName\": \"doramart\",\n    \"logo\": \"/upload/images/defaultlogo.png\",\n    \"date\": \"2018-11-13 12:09:29\",\n    \"enable\": true,\n    \"id\": \"zwwdJvLmP\"\n  },\n \"contentId\": {\n \"_id\": \"R8_iIMwF1\",\n \"title\": \"海底捞的致命缺点是什么？\",\n \"stitle\": \"海底捞的致命缺点是什么？\",\n \"updateDate\": \"2018-11-22\",\n \"date\": \"2018-11-22 23:03:44\",\n \"id\": \"R8_iIMwF1\"\n     },\n \"__v\": 0,\n \"content\": \"这也是一条留言\",\n \"hasPraise\": false,\n \"praiseNum\": 0,\n \"date\": \"3 天前\",\n \"utype\": \"0\",\n \"id\": \"tYVGV-HTL\"\n   },\n   {\n \"_id\": \"4wv0tcLjH\",\n \"author\": {\n \"_id\": \"zwwdJvLmP\",\n \"userName\": \"doramart\",\n \"logo\": \"/upload/images/defaultlogo.png\",\n \"date\": \"2018-11-13 12:09:29\",\n \"enable\": true,\n \"id\": \"zwwdJvLmP\"\n     },\n \"contentId\": {\n \"_id\": \"vGVoKV0g_\",\n \"title\": \"有哪一刹那让你对日本的美好印象瞬间破灭？\",\n \"stitle\": \"有哪一刹那让你对日本的美好印象瞬间破灭？\",\n \"updateDate\": \"2018-11-22\",\n \"date\": \"2018-11-22 23:03:44\",\n \"id\": \"vGVoKV0g_\"\n     },\n \"__v\": 0,\n \"content\": \"这是一条留言\",\n \"hasPraise\": false,\n \"praiseNum\": 0,\n \"date\": \"3 天前\",\n \"utype\": \"0\",\n \"id\": \"4wv0tcLjH\"\n   }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://www.html-js.cn/api/contentMessage/getMessages"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-contentmessage/app/controller/api/contentMessage.js",
    "groupTitle": "ContentMessage"
  },
  {
    "type": "post",
    "url": "/api/contentMessage/postMessages",
    "title": "帖子评论/留言",
    "description": "<p>帖子评论/留言，需要登录态</p>",
    "name": "_contentMessage_postMessages",
    "group": "ContentMessage",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>登录时返回的参数鉴权</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "contentId",
            "description": "<p>帖子ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "replyAuthor",
            "description": "<p>回复者ID (二级留言必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "relationMsgId",
            "description": "<p>回复目标留言ID (二级留言必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>评论内容</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"status\": 200,\n   \"message\": \"操作成功！\",\n   \"server_time\": 1543372263586,\n   \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://www.html-js.cn/api/contentMessage/postMessages"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-contentmessage/app/controller/api/contentMessage.js",
    "groupTitle": "ContentMessage"
  },
  {
    "type": "get",
    "url": "/api/contentTag/getList",
    "title": "获取标签列表",
    "description": "<p>获取标签列表</p>",
    "name": "_contentTag_getList",
    "group": "ContentTag",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>登录返回的token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"status\": 200,\n \"message\": \"communityTags\",\n \"server_time\": 1542248521670,\n \"data\": [\n{\n     _id: \"C41iXBDb5\",\n     name: \"即时要闻\",\n     alias: \"\",\n     comments: \"即时要闻\",\n     __v: 0,\n     date: \"2019-01-04 16:54:41\",\n     id: \"C41iXBDb5\"\n},\n{\n     _id: \"C41iXBDb6\",\n     name: \"测试\",\n     alias: \"\",\n     comments: \"测试\",\n     __v: 0,\n     date: \"2019-01-04 16:54:41\",\n     id: \"C41iXBDb6\"\n},\n{\n     _id: \"ZWlsRWWaL\",\n     name: \"主笔专辑\",\n     alias: \"\",\n     comments: \"主笔专辑\",\n     __v: 0,\n     date: \"2019-01-04 16:54:35\",\n     id: \"ZWlsRWWaL\"\n},\n...\n ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://www.html-js.cn/api/contentTag/getList"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-contenttags/app/controller/api/contentTag.js",
    "groupTitle": "ContentTag"
  },
  {
    "type": "get",
    "url": "/api/content/getContent",
    "title": "查询帖子详情",
    "description": "<p>查询帖子详情(只普通帖子或专题)</p>",
    "name": "_api_content_getContent",
    "group": "Content",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>帖子Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"status\": 200,\n \"message\": \"content\",\n \"server_time\": 1545154926558,\n \"data\": {\n    \"_id\": \"ri5WaXugX\",\n    \"title\": \"谷歌AI首席科学家：想当研究科学家，一事无成你受得了吗？\",\n    \"stitle\": \"谷歌AI首席科学家：想当研究科学家，一事无成你受得了吗？\",\n    \"sortPath\": \"\",\n    \"keywords\": \"\",\n    \"uAuthor\": {\n       \"_id\": \"uUKsBv5y_\",\n       \"userName\": \"creator10\",\n       \"logo\": \"https://cg2010studio.files.wordpress.com/2015/12/cartoonavatar2.jpg\",\n       \"date\": \"2018-12-19 01:42:06\",\n       \"id\": \"uUKsBv5y_\"\n    },\n    \"discription\": \"AI研究科学家不是那么好当的！近日谷歌AI首席科学家Vincent Vanhoucke发表在Medium上的文章引来众人关注。在本文中，他列举了成为研究科学家所要面对的9大挑战，看完这篇内容或许可以在立志投身于科学事业前，给你先“泼一盆冷水”。\",\n    \"__v\": 0,\n    \"author\": {\n       \"userName\": \"doramart\",\n       \"name\": \"超管\",\n       \"logo\": \"/upload/smallimgs/img1448202744000.jpg\"\n    },\n    \"simpleComments\": [\n      {\n       \"type\": \"contents\",\n       \"content\": \"做一名研究人员可能会让你的人生非常充实并得到他人的认可。但我知道很多学生在做研究时受到前景的压力，一时陷入工程的舒适区。他们通常把这个阶段视为个人失败，觉得自己“不够优秀”。而根据我个人的经验，这从来就不是个人价值或者天赋的问题：在研究中成长需要某种不同的气质，这种气质往往与工程师成长的原因有些矛盾。以下是我见过的研究人员在职业生涯的某个阶段不得不面对的一些主要压力：\\n  \\n做研究要解决的是有多个答案（或没有答案）的不适定问题\\n                               *        \"\n      },\n      {\n       \"type\": \"video\",\n       \"content\": \"http://creatorchain.oss-cn-hongkong.aliyuncs.com/upload/images/1071402816293179392.mp4\"\n      },\n      {\n       \"type\": \"contents\",\n       \"content\": \" \\n\\n大学教育很大程度上教会了你如何用特定的方案解决适定问题，但用这种方式去对待研究却注定失败。你在研究中做的很多事并不会让你接近答案，而是让你更好地理解问题。 \\n\"\n      },\n      {\n       \"type\": \"image\",\n       \"content\": \"http://creatorchain.oss-cn-hongkong.aliyuncs.com/upload/images/1075054319700676608.png\"\n      },\n      {\n       \"type\": \"contents\",\n       \"content\": \" \\n用学到的东西，而不是取得的研究进展来衡量自己的进步，是一个人在研究环境中必须经历的重要范式转变之一。\\n\\n\"\n      }\n    ],\n    \"likeNum\": 0,\n    \"commentNum\": 10,\n    \"clickNum\": 77,\n    \"isTop\": 1,\n    \"state\": true,\n    \"updateDate\": \"2018-12-08 21:37:38\",\n    \"date\": \"2018-12-08 21:37:38\",\n    \"duration\": \"0:01\",\n    \"videoArr\": [\n       \"http://creatorchain.oss-cn-hongkong.aliyuncs.com/upload/images/1071402816293179392.mp4\"\n    ],\n    \"imageArr\": [\n       \"http://creatorchain.oss-cn-hongkong.aliyuncs.com/upload/images/1075054319700676608.png\"\n    ],\n    \"appShowType\": \"3\",\n    \"videoImg\": \"http://creatorchain.oss-cn-hongkong.aliyuncs.com/upload/images/1071402816293179392_thumbnail.jpg\", // 视频缩略图（当appShowType=3）\n    \"sImg\": \"http://creatorchain.oss-cn-hongkong.aliyuncs.com/upload/images/img1544276235259.jpg\",\n    \"tags\": [\n      {\n       \"_id\": \"aGE-YfyLRjx\",\n       \"name\": \"化学\",\n       \"date\": \"2018-12-19 01:42:06\",\n       \"id\": \"aGE-YfyLRjx\"\n      },\n      {\n       \"_id\": \"_euYIiOqvLA\",\n       \"name\": \"体育\",\n       \"date\": \"2018-12-19 01:42:06\",\n       \"id\": \"_euYIiOqvLA\"\n      }\n    ],\n    \"categories\": [\n      \n    ],\n    \"type\": \"1\",\n    \"id\": \"ri5WaXugX\",\n    \"hasPraised\": false,\n    \"hasReworded\": false,\n    \"hasComment\": true,\n    \"hasFavorite\": false,\n    \"hasDespise\": false,\n    \"total_reward_num\": 0,\n    \"favoriteNum\": 0,\n    \"despiseNum\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://www.html-js.cn/api/content/getContent"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-content/app/controller/api/content.js",
    "groupTitle": "Content"
  },
  {
    "type": "post",
    "url": "/api/content/addOne",
    "title": "创建文档",
    "description": "<p>创建文档</p>",
    "name": "_content_addOne",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>登录时返回的参数鉴权</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>文档标题，必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "discription",
            "description": "<p>文档简介，必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sImg",
            "description": "<p>文档首图(url)，必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>文档类型，必填(1:普通)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "draft",
            "description": "<p>是否草稿(1:是，0:不是)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tags",
            "description": "<p>文档标签ID(目前只传1个)，必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "keywords",
            "description": "<p>关键字,非必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comments",
            "description": "<p>文档详情(html 格式，必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "simpleComments",
            "description": "<p>文档详情简约版(html 格式，客户端端传值和comments字段一样，必填)</p>"
          }
        ]
      }
    },
    "group": "Content",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"status\": 200,\n   \"message\": \"addContent\",\n   \"server_time\": 1548037382973,\n   \"data\": {\n   }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://www.html-js.cn/api/content/addOne"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-content/app/controller/api/content.js",
    "groupTitle": "Content"
  },
  {
    "type": "get",
    "url": "/api/content/getList",
    "title": "查询帖子列表",
    "description": "<p>根据参数获取对应的帖子列表,默认按时间查询，可作为发现栏目列表</p>",
    "name": "_content_getList",
    "group": "Content",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "current",
            "description": "<p>当前页码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页记录数</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "searchkey",
            "description": "<p>搜索关键字</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>指定作者ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "model",
            "description": "<p>(1:推荐帖子)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sortby",
            "description": "<p>按字段排序(0:默认按时间，1:热门)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": 200,\n  \"message\": \"contentlist\",\n  \"server_time\": 1542380520270,\n  \"data\": [\n      {\n          \"_id\": \"Y1XFYKL52\",\n          \"title\": \"如何优化vue的内存占用？\",\n          \"stitle\": \"如何优化vue的内存占用？\",\n          \"sortPath\": \"\",\n          \"keywords\": \"\",\n          \"author\": {\n              \"_id\": \"4JiWCMhzg\",\n              \"userName\": \"doramart\",\n              \"name\": \"生哥\",\n              \"logo\": \"/upload/smallimgs/img1448202744000.jpg\"\n          },\n          \"discription\": \"在使用了一段时间的vue.js开发移动端h5页面（电商类页面，会有一些数据量较大但一次渲染就可以的商品列表）后\",\n          \"comments\": \"在使用了一段时间的vue.js开发移动端h5页面（电商类页面，会有一些数据量较大但一次渲染就可以的商品列表）后，感觉相比于传统的jquery（zepto）和前端模板引擎的组合能有效的提升开发效率和代码维护性，但是也存在一些问题，比如说内存占用问题，用vue.js开发的页面内存占用相比于传统方式会更多，而且传统的开发方式页面渲染完后，还能对不需要的js对象进行垃圾回收，但vue.js里面的一些指令对象、watcher对象、data数据等似乎目前都没有找到比较好的垃圾回收的方式。想问下对于那些只用渲染一次的页面部分（比如数据量较大的列表页）有没有比较合适的内存优化方案（比如释放指令对象、watcher对象、data对象）？举个例子：比如其中的lazy指令，以及对于items这个基本上只用渲染一次的data等有没有可以优化内存占用的方法\",\n          \"translate\": \"\",\n          \"bearish\": [],\n          \"profitable\": [],\n          \"from\": \"1\",\n          \"likeUserIds\": [],\n          \"likeNum\": 0, // 点赞总数\n          \"commentNum\": 0, // 留言总数\n          \"favoriteNum\": 0, // 收藏总数\n          \"despiseNum\": 0, // 踩帖总数\n          \"clickNum\": 1,\n          \"isTop\": 0,\n          \"state\": true,\n          \"updateDate\": \"2018-11-16\",\n          \"date\": \"2018-11-16 23:00:16\",\n          \"appShowType\": \"0\", // app端展示模式 0，1，2，3\n          \"duration\": \"0:01\",, // 针对视频的视频时长\n          \"sImg\": \"/upload/images/img20181116225948.jpeg\",\n          \"tags\": [\n              {\n               \"_id\": \"Y3DTgmHK3\",\n               \"name\": \"区块链\",\n               \"date\": \"2018-11-16 23:02:00\",\n               \"id\": \"Y3DTgmHK3\"\n               }\n           ],\n          \"categories\": [\n               {\n               \"_id\": \"Nycd05pP\",\n               \"name\": \"人工智能\",\n               \"defaultUrl\": \"artificial-intelligence\",\n               \"enable\": true,\n               \"date\": \"2018-11-16 23:02:00\",\n               \"id\": \"Nycd05pP\"\n               }\n           ],\n          \"type\": \"1\",\n          \"id\": \"Y1XFYKL52\"\n          \"hasPraised\": false // 当前用户是否已赞�\n          \"hasReworded\": false // 当前用户是否已打赏�\n          \"hasComment\": false // 当前用户是否已评论\n          \"hasFavorite\": false // 当前用户是否已收藏\n          \"hasDespise\": false // 当前用户是否已踩\n          \"total_reward_num\": 0  // 打赏总额\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://www.html-js.cn/api/content/getList"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-content/app/controller/api/content.js",
    "groupTitle": "Content"
  },
  {
    "type": "get",
    "url": "/api/content/getMyFavoriteContents",
    "title": "获取我收藏的帖子列表",
    "description": "<p>获取我收藏的帖子列表 带分页</p>",
    "name": "_content_getMyFavoriteContents",
    "group": "Content",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "current",
            "description": "<p>当前页码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页记录数</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>登录时返回的参数鉴权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": 200,\n  \"message\": \"contentlist\",\n  \"server_time\": 1542380520270,\n  \"data\": [\n      {\n          \"_id\": \"Y1XFYKL52\",\n          \"title\": \"如何优化vue的内存占用？\",\n          \"stitle\": \"如何优化vue的内存占用？\",\n          \"sortPath\": \"\",\n          \"keywords\": \"\",\n          \"author\": {\n              \"_id\": \"4JiWCMhzg\",\n              \"userName\": \"doramart\",\n              \"name\": \"生哥\",\n              \"logo\": \"/upload/smallimgs/img1448202744000.jpg\"\n          },\n          \"discription\": \"在使用了一段时间的vue.js开发移动端h5页面（电商类页面，会有一些数据量较大但一次渲染就可以的商品列表）后\",\n          \"comments\": \"在使用了一段时间的vue.js开发移动端h5页面（电商类页面，会有一些数据量较大但一次渲染就可以的商品列表）后，感觉相比于传统的jquery（zepto）和前端模板引擎的组合能有效的提升开发效率和代码维护性，但是也存在一些问题，比如说内存占用问题，用vue.js开发的页面内存占用相比于传统方式会更多，而且传统的开发方式页面渲染完后，还能对不需要的js对象进行垃圾回收，但vue.js里面的一些指令对象、watcher对象、data数据等似乎目前都没有找到比较好的垃圾回收的方式。想问下对于那些只用渲染一次的页面部分（比如数据量较大的列表页）有没有比较合适的内存优化方案（比如释放指令对象、watcher对象、data对象）？举个例子：比如其中的lazy指令，以及对于items这个基本上只用渲染一次的data等有没有可以优化内存占用的方法\",\n          \"likeNum\": 0,\n          \"commentNum\": 0,\n          \"clickNum\": 1,\n          \"isTop\": 0,\n          \"state\": true,\n          \"updateDate\": \"2018-11-16\",\n          \"date\": \"2018-11-16 23:00:16\",\n          \"appShowType\": \"0\", // app端展示模式 0，1，2，3\n          \"sImg\": \"/upload/images/img20181116225948.jpeg\",\n          \"tags\": [\n              {\n               \"_id\": \"Y3DTgmHK3\",\n               \"name\": \"区块链\",\n               \"date\": \"2018-11-16 23:02:00\",\n               \"id\": \"Y3DTgmHK3\"\n               }\n           ],\n          \"categories\": [\n               {\n               \"_id\": \"Nycd05pP\",\n               \"name\": \"人工智能\",\n               \"defaultUrl\": \"artificial-intelligence\",\n               \"enable\": true,\n               \"date\": \"2018-11-16 23:02:00\",\n               \"id\": \"Nycd05pP\"\n               }\n           ],\n          \"type\": \"1\",\n          \"id\": \"Y1XFYKL52\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://www.html-js.cn/api/user/getMyFavoriteContents"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-content/app/controller/api/content.js",
    "groupTitle": "Content"
  },
  {
    "type": "get",
    "url": "/api/content/getNearbyContent",
    "title": "获取当前文档的上一篇和下一篇",
    "description": "<p>获取随机文档列表 不分页</p>",
    "name": "_content_getNearbyContent",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>帖子Id</p>"
          }
        ]
      }
    },
    "group": "Content",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"status\": 200,\n \"data\": {\n     \"preContent\": {\n         \"categories\": [\n              {\n                  \"enable\": true,\n                  \"defaultUrl\": \"document\",\n                  \"_id\": \"Ek7skiaw\",\n                  \"name\": \"DoraCMS\",\n                  \"contentTemp\": null,\n                  \"id\": \"Ek7skiaw\"\n                        },\n              {\n                  \"enable\": true,\n                  \"defaultUrl\": \"document/course\",\n                  \"_id\": \"EJFzljaw\",\n                  \"name\": \"原创教程\",\n                  \"contentTemp\": null,\n                  \"id\": \"EJFzljaw\"\n             }\n         ],\n         \"tags\": [\n              {\n                  \"_id\": \"N1OYhcvpg\",\n                  \"name\": \"版本更新\",\n                  \"id\": \"N1OYhcvpg\"\n             },\n              {\n                  \"_id\": \"4JZjY1Ru\",\n                  \"name\": \"DoraCMS\",\n                  \"id\": \"4JZjY1Ru\"\n             }\n         ],\n         \"sImg\": \"/static/upload/images/1571243055075.jpeg\",\n         \"_id\": \"FDIy_dWl\",\n         \"title\": \"DoraCMS 插件化探索（一）\",\n         \"author\": {\n             \"logo\": \"/static/upload/smallimgs/img1448202744000.jpg\",\n             \"_id\": \"4JiWCMhzg\",\n             \"userName\": \"doramart\"\n         },\n         \"discription\": \"DoraCMS 从今年年初的时候开始有插件化构想，为什么会有这种想法？其实就目前发布的DoraCMS 2.1.3 来讲，对比之前的版本有很多优化，最重要的一点是建立了比较清晰的代码结构\",\n         \"uAuthor\": {\n             \"logo\": \"/static/upload/smallimgs/img1447739082000.jpg\",\n             \"group\": \"0\",\n             \"_id\": \"41oT6sQXl\",\n             \"userName\": \"doramart\",\n             \"name\": \"生哥\",\n             \"id\": \"41oT6sQXl\"\n         },\n         \"updateDate\": \"2019-10-17 00:28:05\",\n         \"id\": \"FDIy_dWl\"\n     },\n     \"nextContent\": []\n  },\n \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://www.html-js.cn/api/content/getNearbyContent"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-content/app/controller/api/content.js",
    "groupTitle": "Content"
  },
  {
    "type": "get",
    "url": "/api/content/getRadomContents",
    "title": "获取随机文档列表",
    "description": "<p>获取随机文档列表 不分页</p>",
    "name": "_content_getRadomContents",
    "group": "Content",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": 200,\n  \"message\": \"contentlist\",\n  \"server_time\": 1542380520270,\n  \"data\": [\n      {\n          \"_id\": \"Y1XFYKL52\",\n          \"title\": \"如何优化vue的内存占用？\",\n          \"stitle\": \"如何优化vue的内存占用？\",\n          \"sortPath\": \"\",\n          \"keywords\": \"\",\n          \"author\": {\n              \"_id\": \"4JiWCMhzg\",\n              \"userName\": \"doramart\",\n              \"name\": \"生哥\",\n              \"logo\": \"/upload/smallimgs/img1448202744000.jpg\"\n          },\n          \"discription\": \"在使用了一段时间的vue.js开发移动端h5页面（电商类页面，会有一些数据量较大但一次渲染就可以的商品列表）后\",\n          \"comments\": \"在使用了一段时间的vue.js开发移动端h5页面（电商类页面，会有一些数据量较大但一次渲染就可以的商品列表）后，感觉相比于传统的jquery（zepto）和前端模板引擎的组合能有效的提升开发效率和代码维护性，但是也存在一些问题，比如说内存占用问题，用vue.js开发的页面内存占用相比于传统方式会更多，而且传统的开发方式页面渲染完后，还能对不需要的js对象进行垃圾回收，但vue.js里面的一些指令对象、watcher对象、data数据等似乎目前都没有找到比较好的垃圾回收的方式。想问下对于那些只用渲染一次的页面部分（比如数据量较大的列表页）有没有比较合适的内存优化方案（比如释放指令对象、watcher对象、data对象）？举个例子：比如其中的lazy指令，以及对于items这个基本上只用渲染一次的data等有没有可以优化内存占用的方法\",\n          \"translate\": \"\",\n          \"bearish\": [],\n          \"profitable\": [],\n          \"from\": \"1\",\n          \"likeUserIds\": [],\n          \"likeNum\": 0, // 点赞总数\n          \"commentNum\": 0, // 留言总数\n          \"favoriteNum\": 0, // 收藏总数\n          \"despiseNum\": 0, // 踩帖总数\n          \"clickNum\": 1,\n          \"isTop\": 0,\n          \"state\": true,\n          \"updateDate\": \"2018-11-16\",\n          \"date\": \"2018-11-16 23:00:16\",\n          \"appShowType\": \"0\", // app端展示模式 0，1，2，3\n          \"duration\": \"0:01\",, // 针对视频的视频时长\n          \"sImg\": \"/upload/images/img20181116225948.jpeg\",\n          \"tags\": [\n              {\n               \"_id\": \"Y3DTgmHK3\",\n               \"name\": \"区块链\",\n               \"date\": \"2018-11-16 23:02:00\",\n               \"id\": \"Y3DTgmHK3\"\n               }\n           ],\n          \"categories\": [\n               {\n               \"_id\": \"Nycd05pP\",\n               \"name\": \"人工智能\",\n               \"defaultUrl\": \"artificial-intelligence\",\n               \"enable\": true,\n               \"date\": \"2018-11-16 23:02:00\",\n               \"id\": \"Nycd05pP\"\n               }\n           ],\n          \"type\": \"1\",\n          \"id\": \"Y1XFYKL52\"\n          \"hasPraised\": false // 当前用户是否已赞�\n          \"hasReworded\": false // 当前用户是否已打赏�\n          \"hasComment\": false // 当前用户是否已评论\n          \"hasFavorite\": false // 当前用户是否已收藏\n          \"hasDespise\": false // 当前用户是否已踩\n          \"total_reward_num\": 0  // 打赏总额\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://www.html-js.cn/api/content/getRadomContents"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-content/app/controller/api/content.js",
    "groupTitle": "Content"
  },
  {
    "type": "get",
    "url": "/api/content/getUserContents",
    "title": "查询指定用户的文档列表",
    "description": "<p>查询指定用户的文档列表，带分页</p>",
    "name": "_content_getUserContents",
    "group": "Content",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "current",
            "description": "<p>当前页码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页记录数</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>指定用户的ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listState",
            "description": "<p>针对本人可以根据状态显示文档列表(all:全部)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>登录时返回的参数鉴权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"status\": 200,\n \"message\": \"contentlist\",\n \"server_time\": 1542891752268,\n \"data\": [\n   {\n     \"_id\": \"jRInYUowi\",\n     \"title\": \"六小龄童做了什么事引来这么多的口诛笔伐？\",\n     \"stitle\": \"六小龄童做了什么事引来这么多的口诛笔伐？\",\n     \"author\": null,\n     \"discription\": \"蓉城圆滚滚： 今天上午刚好听完六小龄童的现场讲座，有视频有真相，还是先附上一段现场版视频吧～ 这是我们省图书馆的一个讲座系列活动，叫“巴蜀讲坛”。通常会在周末邀请很多知名专家学者给大家做一些学术或者科普讲…\",\n     \"comments\": \"9:00的时候开始入场，我虽然到的挺早，但还是只在报告厅的倒数第二排的角落里找到了个位置～大家陆续进场后，工作人员就开始在台上频繁地说：讲座结束后，章老师会有签名活动，为了避免拥挤，大家现在就可以在报告厅门口去购书～～（其实省图挺少接这种签售活动，就算接，一般也是安排在楼上的小活动室里，而不会在这个大报告厅，果然明星还是比较有面儿的哇～）讲座准时开始的，第一个环节是捐赠仪式，大约是捐赠了6套还是8套章老师的书给图书馆来着↓↓↓（红色衣服的是章老师，旁边那位是图书馆某个部门的主任～其实，我大约记得之前几位第一次来馆里办讲座的老师都是副馆长来致欢迎词的～）\",\n     \"uAuthor\": {\n       \"_id\": \"zwwdJvLmP\",\n       \"userName\": \"doramart\",\n       \"logo\": \"/upload/images/defaultlogo.png\",\n       \"date\": \"2018-11-22 21:02:32\",\n       \"id\": \"zwwdJvLmP\"\n     },\n     \"__v\": 0,\n     \"keywords\": null,\n     \"likeNum\": 0, // 点赞总数\n     \"commentNum\": 0, // 留言总数\n     \"favoriteNum\": 0, // 收藏总数\n     \"despiseNum\": 0, // 踩帖总数\n     \"clickNum\": 1,  \n     \"isTop\": 1,\n     \"state\": true,\n     \"updateDate\": \"2018-11-18\",\n     \"date\": \"2018-11-18 20:49:29\",\n     \"appShowType\": \"0\",\n     \"sImg\": \"/upload/images/img20181118203911.jpeg\",\n     \"tags\": [\n       \n     ],\n     \"categories\": [\n       \n     ],\n     \"type\": \"1\",\n     \"id\": \"jRInYUowi\"\n     \"hasPraised\": false // 当前用户是否已赞�\n     \"total_reward_num\": 0  // 打赏总额\n     \"hasReworded\": false // 当前用户是否已打赏�\n     \"hasComment\": false // 当前用户是否已评论\n     \"hasFavorite\": false // 当前用户是否已收藏\n     \"hasDespise\": false // 当前用户是否已踩\n   },\n   ...\n ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://www.html-js.cn/api/content/getUserContents"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-content/app/controller/api/content.js",
    "groupTitle": "Content"
  },
  {
    "type": "post",
    "url": "/api/content/updateOne",
    "title": "更新文档",
    "description": "<p>更新文档</p>",
    "name": "_content_updateOne",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>登录时返回的参数鉴权</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>文档ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>文档标题，必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "discription",
            "description": "<p>文档简介，必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sImg",
            "description": "<p>文档首图(url)，必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>文档类型，必填(1:普通)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "draft",
            "description": "<p>是否草稿(1:是，0:不是)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tags",
            "description": "<p>文档标签ID(目前只传1个)，必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "keywords",
            "description": "<p>关键字,非必填</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comments",
            "description": "<p>文档详情(html 格式，必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "simpleComments",
            "description": "<p>文档详情简约版(html 格式，客户端端传值和comments字段一样，必填)</p>"
          }
        ]
      }
    },
    "group": "Content",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"status\": 200,\n   \"message\": \"addContent\",\n   \"server_time\": 1548037382973,\n   \"data\": {\n   }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://www.html-js.cn/api/content/updateOne"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-content/app/controller/api/content.js",
    "groupTitle": "Content"
  },
  {
    "type": "post",
    "url": "/api/upload/files",
    "title": "文件上传",
    "description": "<p>文件上传，上传用户头像等</p>",
    "name": "_api_upload_files",
    "group": "Normal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "file",
            "optional": false,
            "field": "file",
            "description": "<p>文件</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>登录时返回的参数鉴权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"status\": 200,\n   \"message\": \"get data success\",\n   \"server_time\": 1544167579835,\n   \"data\": \n   {\n      \"path\": \"http://creatorchain.oss-cn-hongkong.aliyuncs.com/upload/images/img1544167579253.png\" // 文件链接\n   } \n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://www.html-js.cn/api/upload/files"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/normalApi.js",
    "groupTitle": "Normal"
  },
  {
    "type": "get",
    "url": "/api/getImgCode",
    "title": "获取图片二维码",
    "description": "<p>获取图片二维码，用于登录校验等场景</p>",
    "name": "_getImgCode",
    "group": "Normal",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://www.html-js.cn/api/getImgCode"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/normalApi.js",
    "groupTitle": "Normal"
  },
  {
    "type": "get",
    "url": "/api/createQRCode",
    "title": "获取二维码",
    "description": "<p>根据链接获取二维码</p>",
    "name": "createQRCode",
    "group": "Normal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "text",
            "description": "<p>需要转成二维码的字符(必填)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://www.html-js.cn/api/createQRCode"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/normalApi.js",
    "groupTitle": "Normal"
  },
  {
    "type": "get",
    "url": "/api/siteMessage/getList",
    "title": "获取用户消息列表",
    "description": "<p>获取用户消息列表，带分页，包含 赞赏、关注和评论消息，需要登录态</p>",
    "name": "_siteMessage_getList",
    "group": "SiteMessage",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "current",
            "description": "<p>当前页码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页记录数</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>登录时返回的参数鉴权</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>消息类别(1、赞赏 ，2、关注 ，3、评论或回复)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"status\": 200,\n   \"message\": \"getSiteMessages\",\n   \"server_time\": 1543917647397,\n   \"data\": [\n       {\n           \"_id\": \"2hl6nHtY0\",\n           \"type\": \"2\",\n           \"activeUser\": {\n              \"_id\": \"zwwdJvLmP\",\n              \"userName\": \"doramart\",\n              \"phoneNum\": 15220064294,\n              \"category\": [],\n              \"group\": \"0\",\n              \"logo\": \"/upload/images/defaultlogo.png\",\n              \"date\": \"2018-11-13 12:09:29\",\n              \"comments\": \"\",\n              \"enable\": true,\n              \"id\": \"zwwdJvLmP\",\n              \"content_num\": 5,\n              \"watch_num\": 1,\n              \"follow_num\": 0,\n              \"had_followed\": false\n           },\n           \"passiveUser\": {\n              \"_id\": \"yNYHEw3-e\",\n              \"userName\": \"yoooyu\",\n              \"category\": [\n                 \"yOgDdV8_b\"\n               ],\n              \"group\": \"1\",\n              \"logo\": \"/upload/images/defaultlogo.png\",\n              \"date\": \"2018-11-17 09:59:52\",\n              \"enable\": true,\n              \"id\": \"yNYHEw3-e\"\n           },\n             \"message\": {\n               \"_id\": \"ClvqfXbjw\",\n               \"contentId\": {\n                   \"_id\": \"HBFOrbWYz\",\n                   \"title\": \"2018年，你一定被这十首歌逼疯过\",\n                   \"date\": \"2018-12-25 21:50:57\",\n                   \"updateDate\": \"2019-01-01 14:56:34\",\n                   \"id\": \"HBFOrbWYz\"\n               },\n               \"content\": \"多重评论再一次\",\n               \"date\": \"2019-01-01 14:56:34\",\n               \"id\": \"ClvqfXbjw\"\n             },\n           \"__v\": 0,\n           \"isRead\": false,\n           \"date\": \"2018-11-18 16:11:26\",\n           \"id\": \"2hl6nHtY0\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://www.html-js.cn/api/siteMessage/getList"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-sitemessage/app/controller/api/siteMessage.js",
    "groupTitle": "SiteMessage"
  },
  {
    "type": "get",
    "url": "/api/siteMessage/getSiteMessageOutline",
    "title": "获取私信概要",
    "description": "<p>获取私信概要(私信内容，关注、评论未读数量和第一条记录)</p>",
    "name": "_siteMessage_getSiteMessageOutline",
    "group": "SiteMessage",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>登录时返回的参数鉴权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"status\": 200,\n \"message\": \"getSiteMessageOutline\",\n \"server_time\": 1543904194731,\n \"data\": {\n   \"first_privateLetter\": {\n   \"_id\": \"yvOk_g1y71\",\n   \"user\": \"yNYHEw3-e\",\n   \"notify\": {   // 私信的具体内容\n       \"_id\": \"5mCBWXS-B\",\n       \"title\": \"这是一条私信，不要偷偷打开哟。。。\",\n       \"content\": \"<p>这是一条私信，不要偷偷打开哟。。。</p>\",\n       \"adminSender\": \"4JiWCMhzg\",\n       \"type\": \"1\",\n       \"__v\": 0,\n       \"date\": \"2018-11-18 16:13:47\",\n       \"id\": \"5mCBWXS-B\"\n     },\n   \"__v\": 0,\n   \"date\": \"2018-11-18 16:13:47\",\n   \"isRead\": false,\n   \"id\": \"yvOk_g1y71\"\n   },\n   \"private_no_read_num\": 1,\n   \"no_read_good_num\": 1,\n   \"first_good_message\": { // 被点赞的第一条消息，客户端可以根据 activeUser 组装消息 \"activeUser.userName 给你点赞了\"\n        \"_id\": \"Ogg7mFnjS\",\n        \"type\": \"1\",\n        \"activeUser\": {\n            \"_id\": \"zwwdJvLmP\",\n            \"userName\": \"doramart\",\n            \"date\": \"2018-12-04 14:16:34\",\n            \"id\": \"zwwdJvLmP\"\n          },\n        \"passiveUser\": \"yNYHEw3-e\",\n        \"content\": \"Y1XFYKL52\",\n        \"__v\": 0,\n        \"isRead\": false,\n        \"date\": \"2018-11-18 16:10:44\",\n        \"id\": \"Ogg7mFnjS\"\n   },\n   \"no_read_follow_num\": 1,\n   \"first_follow_message\": { // 被关注的第一条消息，客户端可以根据 activeUser 组装消息 \"activeUser.userName 关注了你\"\n        \"_id\": \"2hl6nHtY0\",\n        \"type\": \"2\",\n        \"activeUser\": {\n            \"_id\": \"zwwdJvLmP\",\n            \"userName\": \"doramart\",\n            \"date\": \"2018-12-04 14:16:34\",\n            \"id\": \"zwwdJvLmP\"\n          },\n        \"passiveUser\": \"yNYHEw3-e\",\n        \"__v\": 0,\n        \"isRead\": false,\n        \"date\": \"2018-11-18 16:11:26\",\n        \"id\": \"2hl6nHtY0\"\n   },\n   \"no_read_comment_num\": 1,\n   \"first_comment_message\": { // 评论的第一条消息，客户端可以根据 activeUser 组装消息 \"activeUser.userName 给你评论了\"\n        \"_id\": \"iKGCu4EJj\",\n        \"type\": \"3\",\n        \"activeUser\": {\n            \"_id\": \"zwwdJvLmP\",\n            \"userName\": \"doramart\",\n            \"date\": \"2018-12-04 14:16:34\",\n            \"id\": \"zwwdJvLmP\"\n          },\n        \"passiveUser\": \"yNYHEw3-e\",\n        \"content\": \"Y1XFYKL52\",\n        \"__v\": 0,\n        \"isRead\": false,\n        \"date\": \"2018-11-18 16:11:21\",\n        \"id\": \"iKGCu4EJj\"\n   }\n }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://www.html-js.cn/api/siteMessage/getSiteMessageOutline"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-sitemessage/app/controller/api/siteMessage.js",
    "groupTitle": "SiteMessage"
  },
  {
    "type": "get",
    "url": "/api/siteMessage/setHasRead",
    "title": "设置消息为已读",
    "description": "<p>设置消息为已读，包含 赞赏、关注和评论消息；需要登录态</p>",
    "name": "_siteMessage_setHasRead",
    "group": "SiteMessage",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ids",
            "description": "<p>消息id,多个id用逗号隔开;传 ids=all 设置所有消息为已读</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>当ids为all时，传该参数，指定全部设置已读的消息类别</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>登录时返回的参数鉴权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"status\": 200,\n   \"message\": \"设置已读成功\",\n   \"server_time\": 1542529985218,\n   \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://www.html-js.cn/api/siteMessage/setHasRead"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-sitemessage/app/controller/api/siteMessage.js",
    "groupTitle": "SiteMessage"
  },
  {
    "type": "get",
    "url": "/api/systemNotify/getUserNotifys",
    "title": "获取系统公告",
    "description": "<p>获取系统公告，带分页，需要登录态</p>",
    "name": "_systemNotify_getUserNotifys",
    "group": "SystemNotify",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "current",
            "description": "<p>当前页码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页记录数</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>登录时返回的参数鉴权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"status\": 200,\n   \"message\": \"操作成功 userNotify\",\n   \"server_time\": 1542530587287,\n   \"data\": [\n       {\n           \"_id\": \"myh0RzkV3H\",\n           \"user\": \"zwwdJvLmP\",\n           \"notify\": {\n              \"_id\": \"5mCBWXS-B\",\n              \"title\": \"这是一条私信，不要偷偷打开哟。。。\",\n              \"content\": \"<p>这是一条私信，不要偷偷打开哟。。。</p>\",\n              \"date\": \"2018-11-18 16:43:07\",\n              \"id\": \"5mCBWXS-B\"\n           },\n           \"__v\": 0,\n           \"date\": \"2018-11-18 16:13:47\",\n           \"isRead\": false,\n           \"id\": \"myh0RzkV3H\"\n      }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://www.html-js.cn/api/systemNotify/getUserNotifys"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-systemnotify/app/controller/api/systemNotify.js",
    "groupTitle": "SystemNotify"
  },
  {
    "type": "get",
    "url": "/api/systemNotify/setNoticeRead",
    "title": "设置系统公告为已读",
    "description": "<p>设置系统公告为已读</p>",
    "name": "_systemNotify_setNoticeRead",
    "group": "SystemNotify",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ids",
            "description": "<p>消息id,多个id用逗号隔开,全部传 all</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>登录时返回的参数鉴权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"status\": 200,\n   \"message\": \"设置已读成功\",\n   \"server_time\": 1542529985218,\n   \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://www.html-js.cn/api/systemNotify/setNoticeRead"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-systemnotify/app/controller/api/systemNotify.js",
    "groupTitle": "SystemNotify"
  },
  {
    "type": "get",
    "url": "/api/user/addTags",
    "title": "关注标签",
    "description": "<p>关注标签（需要登录状态,后台会通过读取用户session获取用户ID）</p>",
    "name": "_user_addTags",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>登录时返回的参数鉴权</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tagId",
            "description": "<p>标签id(eq:yNYHEw3-e)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>方式(1:关注 0:取消关注)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"status\": 200,\n \"message\": \"操作成功\",\n \"server_time\": 1542251075220,\n \"data\": {\n   \n }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://www.html-js.cn/api/user/addTags"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-reguser/app/controller/api/regUser.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user/askContentThumbsUp",
    "title": "帖子点赞/取消点赞",
    "description": "<p>帖子点赞/取消点赞，需要登录态</p>",
    "name": "_user_askContentThumbsUp",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>登录时返回的参数鉴权</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "praiseState",
            "description": "<p>in:赞 out:取消赞</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "contentId",
            "description": "<p>帖子ID/评论ID/社群帖ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"status\": 200,\n   \"message\": \"操作成功！\",\n   \"server_time\": 1543372263586,\n   \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://www.html-js.cn/api/user/askContentThumbsUp"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-reguser/app/controller/api/regUser.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user/checkHadSetLoginPassword",
    "title": "校验用户是否已设置登录密码",
    "description": "<p>校验用户是否已设置登录密码，需要登录态</p>",
    "name": "_user_checkHadSetLoginPassword",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>登录时返回的参数鉴权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"status\": 200,\n \"message\": \"checkHadSetLoginPassword success\",\n \"server_time\": 1544245281332,\n \"data\": {\n   \"checkState\": true  // true/已设置  false/未设置\n }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://www.html-js.cn/api/user/checkHadSetLoginPassword"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-reguser/app/controller/api/regUser.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user/checkPhoneNumExist",
    "title": "校验注册手机号是否存在",
    "description": "<p>校验注册手机号是否存在</p>",
    "name": "_user_checkPhoneNumExist",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countryCode",
            "description": "<p>国家代码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phoneNum",
            "description": "<p>注册手机号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"status\": 200,\n \"message\": \"checkPhoneNumExist success\",\n \"server_time\": 1544245281332,\n \"data\": {\n   \"checkState\": true  // true/存在  false/不存在\n }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://www.html-js.cn/api/user/checkPhoneNumExist"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-reguser/app/controller/api/regUser.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user/despiseContent",
    "title": "踩/取消踩 帖子",
    "description": "<p>踩/取消踩帖子，需要登录态</p>",
    "name": "_user_despiseContent",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>登录时返回的参数鉴权</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "despiseState",
            "description": "<p>in:踩 out:取消踩</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "contentId",
            "description": "<p>帖子ID/评论ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"status\": 200,\n   \"message\": \"操作成功！\",\n   \"server_time\": 1543372263586,\n   \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://www.html-js.cn/api/user/favoriteContent"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-reguser/app/controller/api/regUser.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user/favoriteContent",
    "title": "收藏/取消收藏帖子",
    "description": "<p>收藏/取消收藏帖子，需要登录态</p>",
    "name": "_user_favoriteContent",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>登录时返回的参数鉴权</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "favoriteState",
            "description": "<p>in:收藏 out:取消收藏</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "contentId",
            "description": "<p>帖子ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"status\": 200,\n   \"message\": \"操作成功！\",\n   \"server_time\": 1543372263586,\n   \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://www.html-js.cn/api/user/favoriteContent"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-reguser/app/controller/api/regUser.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user/followCreator",
    "title": "关注/取消关注 创作者",
    "description": "<p>关注/取消关注 创作者（需要登录状态,后台会通过读取用户session获取用户ID）</p>",
    "name": "_user_followCreator",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>登录时返回的参数鉴权</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "followState",
            "description": "<p>in:关注 out:取消关注</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "creatorId",
            "description": "<p>创作者id(eq:yNYHEw3-e)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"status\": 200,\n \"message\": \"操作成功\",\n \"server_time\": 1542251075220,\n \"data\": {\n   \n }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://www.html-js.cn/api/user/followCreator"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-reguser/app/controller/api/regUser.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user/getMyFollowInfos",
    "title": "我的关注",
    "description": "<p>我的关注，获取我关注的创作者，专题，已经关注创作者的帖子等相关信息，目前不带分页</p>",
    "name": "_user_getMyFollowInfos",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>登录时返回的参数鉴权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"status\": 200,\n \"message\": \"getMyFollowInfos\",\n \"server_time\": 1542900168427,\n \"data\": {\n  \"watchersList\": [ // 我关注的创作者\n     {\n      \"_id\": \"yNYHEw3-e\",\n      \"userName\": \"yoooyu\",\n      \"name\": \"创作者兄\",\n      \"date\": \"2018-11-22 23:22:48\",\n      \"id\": \"yNYHEw3-e\"\n     }\n   ],\n  \"watchSpecialList\": [ // 我关注的专题\n     {\n      \"_id\": \"eF0Djunws\",\n      \"name\": \"人工智能\",\n      \"comments\": \"关注人工智能，人人都有机会\",\n      \"sImg\": \"/upload/images/img20181117213151.png\",\n      \"date\": \"2018-11-22 23:22:48\",\n      \"id\": \"eF0Djunws\"\n     }\n   ],\n  \"watchCreatorContents\": [ // 我关注的相关内容\n     {\n      \"_id\": \"Y1XFYKL52\",\n      \"title\": \"如何优化vue的内存占用？\",\n      \"stitle\": \"如何优化vue的内存占用？\",\n      \"sortPath\": \"\",\n      \"keywords\": \"\",\n      \"uAuthor\": \"yNYHEw3-e\",\n      \"discription\": \"在使用了一段时间的vue.js开发移动端h5页面（电商类页面，会有一些数据量较大但一次渲染就可以的商品列表）后\",\n      \"comments\": \"<p><span>在使用了一段时间的vue.js开发移动端h5页面（电商类页面，会有一些数据量较大但一次渲染就可以的商品列表）后，感觉相比于传统的jquery（zepto）和前端模板引擎的组合能有效的提升开发效率和代码维护性，但是也存在一些问题，比如说内存占用问题，用vue.js开发的页面内存占用相比于传统方式会更多，而且传统的开发方式页面渲染完后，还能对不需要的js对象进行垃圾回收，但vue.js里面的一些指令对象、watcher对象、data数据等似乎目前都没有找到比较好的垃圾回收的方式。</span><br /><br /><span>想问下对于那些只用渲染一次的页面部分（比如数据量较大的列表页）有没有比较合适的内存优化方案（比如释放指令对象、watcher对象、data对象）？</span><br /><br /><span>举个例子：</span><br /><br /><span>比如其中的lazy指令，以及对于items这个基本上只用渲染一次的data等有没有可以优化内存占用的方法</span></p>\",\n      \"twiterAuthor\": \"\",\n      \"translate\": \"\",\n      \"bearish\": [\n         \n       ],\n      \"profitable\": [\n         \n       ],\n      \"isFlash\": false,\n      \"__v\": 0,\n      \"author\": \"\",\n      \"likeNum\": 0,\n      \"commentNum\": 0,\n      \"clickNum\": 5,\n      \"isTop\": 1,\n      \"state\": true,\n      \"updateDate\": \"2018-11-16\",\n      \"date\": \"2018-11-16 23:00:16\",\n      \"appShowType\": \"0\",\n      \"sImg\": \"/upload/images/img20181116225948.jpeg\",\n      \"tags\": [\n      \"Y3DTgmHK3\"\n       ],\n      \"categories\": [\n         \n       ],\n      \"type\": \"1\",\n      \"id\": \"Y1XFYKL52\"\n     }\n   ]\n }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://www.html-js.cn/api/user/getMyFollowInfos"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-reguser/app/controller/api/regUser.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/updateInfo",
    "title": "修改用户信息",
    "description": "<p>修改用户信息，需要登录态</p>",
    "name": "_user_updateInfo",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>登录时返回的参数鉴权</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "profession",
            "description": "<p>职业</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "industry",
            "description": "<p>行业</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "experience",
            "description": "<p>教育经历</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "logo",
            "description": "<p>头像</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "gender",
            "description": "<p>性别 0男 1女</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>昵称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phoneNum",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "introduction",
            "description": "<p>一句话介绍</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comments",
            "description": "<p>个人简介</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "province",
            "description": "<p>所在省份</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "city",
            "description": "<p>所在城市</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "birth",
            "description": "<p>出生年月日 2018-09-21</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"status\": 200,\n   \"message\": \"操作成功！\",\n   \"server_time\": 1543372263586,\n   \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://www.html-js.cn/api/user/updateInfo"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-reguser/app/controller/api/regUser.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/bindInfo",
    "title": "游客绑定邮箱或手机号",
    "description": "<p>游客绑定邮箱或手机号</p>",
    "name": "bindInfo",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>绑定类型（1:手机号  2:邮箱）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phoneNum",
            "description": "<p>手机号（eq:15220064294）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countryCode",
            "description": "<p>国家代码（eq: 86）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "messageCode",
            "description": "<p>手机验证码/邮箱验证码(eq: 123456)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>注册邮箱</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"status\": 200,\n   \"message\": \"绑定成功\",\n   \"server_time\": 1544246883076,\n   \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  data: {}\n  message: \"绑定失败\"\n  server_time: 1542082677922\n  status: 500\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://www.html-js.cn/api/user/bindInfo"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-reguser/app/controller/api/regUser.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/doLogin",
    "title": "用户登录",
    "description": "<p>用户登录</p>",
    "name": "doLogin",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phoneNum",
            "description": "<p>手机号（eq:15220064294）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countryCode",
            "description": "<p>国家代码（eq: 86）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>用户邮箱(xx@qq.com)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "loginType",
            "description": "<p>登录类型 (1:手机验证码登录 2:手机号密码登录 3:邮箱密码登录,4:邮箱验证码登录)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "messageCode",
            "description": "<p>手机验证码(eq: 123456)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码 // 非必填，与短信验证码选其一</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  data: {\n    comments: \"\"\n    date: \"2018-11-13 12:09:29\"\n    email: \"doramart@qq.com\"\n    enable: true\n    group: \"0\"\n    id: \"zwwdJvLmP\"\n    logo: \"/upload/images/defaultlogo.png\"\n    userName: \"doramart\"\n    token: \"eyJkYXRhIjp7InVzZXJJZCI6Inp3d2RKdkxtUCIsInBob25lTnVtIjoxNTIyMDA2NDI5NH0sImNyZWF0ZWQiOjE1NDI2NDMyNTAsImV4cCI6MzYwMH0=.SW3JVAjkQUX0mgrSBuOirB3kQV6NNatlc4j/qW7SxTM=\"\n  } \n  message: \"登录成功\"\n  server_time: 1542089573405\n  status: 200\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  data: {}\n  message: \"验证码错误\"\n  server_time: 1542082677922\n  status: 500\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://www.html-js.cn/api/user/doLogin"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-reguser/app/controller/api/regUser.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/doReg",
    "title": "用户注册",
    "description": "<p>用户注册</p>",
    "name": "doReg",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "regType",
            "description": "<p>注册类型（1:手机号注册  2:邮箱注册）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phoneNum",
            "description": "<p>手机号（eq:15220064294）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countryCode",
            "description": "<p>国家代码（eq: 86）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "messageCode",
            "description": "<p>手机验证码/邮箱验证码(eq: 123456)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>注册邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "logo",
            "description": "<p>用户头像</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"status\": 200,\n   \"message\": \"注册成功\",\n   \"server_time\": 1544246883076,\n   \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  data: {}\n  message: \"注册失败\"\n  server_time: 1542082677922\n  status: 500\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://www.html-js.cn/api/user/doReg"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-reguser/app/controller/api/regUser.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/modifyMyPsd",
    "title": "修改密码",
    "description": "<p>修改密码</p>",
    "name": "modifyMyPsd",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>登录时返回的参数鉴权</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>原密码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>新密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": 200,\n    \"message\": \"密码修改成功！\",\n    \"server_time\": 1544536543533,\n    \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://www.html-js.cn/api/user/modifyMyPsd"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-reguser/app/controller/api/regUser.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/resetPassword",
    "title": "忘记密码找回",
    "description": "<p>忘记密码找回</p>",
    "name": "resetPassword",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phoneNum",
            "description": "<p>手机号（eq:15220064294）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countryCode",
            "description": "<p>国家代码（eq: 86）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "messageCode",
            "description": "<p>手机验证码(eq: 123456)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱(eq: xx@qq.com)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>找回方式(1:通过手机号找回，2:通过邮箱找回)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": 200,\n    \"message\": \"操作成功！\",\n    \"server_time\": 1544536543533,\n    \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://www.html-js.cn/api/user/resetPassword"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-reguser/app/controller/api/regUser.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/sendVerificationCode",
    "title": "发送验证码",
    "description": "<p>发送验证码</p>",
    "name": "sendVerificationCode",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phoneNum",
            "description": "<p>手机号(eq:15220064294)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countryCode",
            "description": "<p>国家代码（eq: 86）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "messageType",
            "description": "<p>发送验证码类别（0、注册 1、登录，2、忘记资金密码找回, 3、忘记密码，4、身份验证, 5、管理员登录，6、游客绑定邮箱或手机号）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sendType",
            "description": "<p>发送验证码形式（1: 短信验证码  2:邮箱验证码）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": 200,\n    \"message\": \"send Code success\",\n    \"server_time\": 1542382533904,\n    \"data\": {\n        \"messageCode\": \"378047\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  data: {}\n  message: \"验证码错误\"\n  server_time: 1542082677922\n  status: 500\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://www.html-js.cn/api/user/sendVerificationCode"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-reguser/app/controller/api/regUser.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/touristLogin",
    "title": "游客登录",
    "description": "<p>游客登录</p>",
    "name": "touristLogin",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userCode",
            "description": "<p>客户端传递加签字符串</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  data: {\n    comments: \"\"\n    date: \"2018-11-13 12:09:29\"\n    enable: true\n    group: \"0\"\n    id: \"zwwdJvLmP\"\n    logo: \"/upload/images/defaultlogo.png\"\n    userName: \"doramart\"\n    token: \"eyJkYXRhIjp7InVzZXJJZCI6Inp3d2RKdkxtUCIsInBob25lTnVtIjoxNTIyMDA2NDI5NH0sImNyZWF0ZWQiOjE1NDI2NDMyNTAsImV4cCI6MzYwMH0=.SW3JVAjkQUX0mgrSBuOirB3kQV6NNatlc4j/qW7SxTM=\"\n  } \n  message: \"登录成功\"\n  server_time: 1542089573405\n  status: 200\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  data: {}\n  message: \"登录失败\"\n  server_time: 1542082677922\n  status: 500\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://www.html-js.cn/api/user/touristLogin"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-reguser/app/controller/api/regUser.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user/userInfo",
    "title": "获取登录用户基本信息",
    "description": "<p>获取登录用户信基本信息,需要登录态</p>",
    "name": "userInfo",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>登录时返回的参数鉴权</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  data: {\n    userInfo: {\n      comments: \"\"\n      phoneNum: \"15229908899\"\n      countryCode: \"86\"\n      date: \"2018-11-13 12:09:29\"\n      email: \"doramart@qq.com\"\n      enable: true\n      group: \"0\"\n      id: \"zwwdJvLmP\"\n      logo: \"/upload/images/defaultlogo.png\"\n      msg_count: { }\n      userName: \"doramart\"\n   }\n   status: 200\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://www.html-js.cn/api/user/userInfo"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-reguser/app/controller/api/regUser.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/versionManage/getAppVersion",
    "title": "获取APP版本信息",
    "description": "<p>获取APP版本信息</p>",
    "name": "_versionManage_getAppVersion",
    "group": "VersionManage",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "versionCode",
            "description": "<p>版本号(传字符串类型整数)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "client",
            "description": "<p>客户端类型(0:安卓，1:ios)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"status\": 200,\n   \"message\": \"get versionData success\",\n   \"server_time\": 1548049855934,\n   \"data\": {\n        \"_id\": \"H158NRt7Q\",\n        \"description\": \"新增自动更新1\",\n        \"title\": \"有更新啦1\",\n        \"url\": \"/upload/images/apk20180717192615.apk\",\n        \"version\": \"21\",\n        \"versionName\": \"1.1\",\n        \"date\": \"2018-07-16 16:16:17\",\n        \"forcibly\": true,\n        \"id\": \"H158NRt7Q\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://www.html-js.cn/api/versionManage/getAppVersion"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-versionmanage/app/controller/api/versionManage.js",
    "groupTitle": "VersionManage"
  }
] });
