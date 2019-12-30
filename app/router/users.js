module.exports = app => {
    const {
        router,
        controller
    } = app;

    //用户登录
    router.get('/users/login', controller.page.home.getDataForUserLogin);

    //用户注册
    router.get('/users/reg', controller.page.home.getDataForUserReg);

}