module.exports = app => {
    const {
        router,
        controller
    } = app;
    router.get(["/", "/zh-CN", "/zh-TW", "/en"], controller.page.home.getDataForIndexPage);

     // 内容详情入口
     router.get("/details/:id.html", controller.page.home.getDataForContentDetails);
}