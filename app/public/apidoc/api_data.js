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
            "description": "<p>广告位名称</p>"
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
        "url": "http://localhost:9090/api/ads/getOne"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-ads/app/controller/api/ads.js",
    "groupTitle": "Ads"
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
        "url": "http://localhost:9090/api/contentMessage/getMessages"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-contentmessage/app/controller/api/contentMessage.js",
    "groupTitle": "ContentMessage"
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
        "url": "http://localhost:9090/api/content/getList"
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
        "url": "http://localhost:9090/api/content/getUserContents"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-content/app/controller/api/content.js",
    "groupTitle": "Content"
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
        "url": "http://localhost:8080/api/user/doLogin"
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
        "url": "http://localhost:8080/api/user/doReg"
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
        "url": "http://localhost:9090/api/user/sendVerificationCode"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-reguser/app/controller/api/regUser.js",
    "groupTitle": "User"
  }
] });
