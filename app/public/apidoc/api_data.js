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
        "url": "http://localhost:9090/api/ads/getOne"
      }
    ],
    "version": "1.0.0",
    "filename": "lib/plugin/egg-dora-ads/app/controller/api/ads.js",
    "groupTitle": "Ads"
  }
] });
