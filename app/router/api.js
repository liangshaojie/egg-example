module.exports = app => {

    const {
        router,
        controller
    } = app;

    router.get('/api/systemConfig/getConfig', controller.api.systemConfig.list)
}