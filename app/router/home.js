module.exports = app => {
    const {
        router,
        controller
    } = app;
    router.get(["/", "/zh-CN", "/zh-TW", "/en"], controller.page.home.getDataForIndexPage);
}