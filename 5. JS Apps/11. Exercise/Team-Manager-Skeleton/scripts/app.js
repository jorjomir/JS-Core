const handlers={};
$(() => {
    const app = Sammy('#main', function () {
        let appCtx=this;
        appCtx.use("Handlebars", "hbs");
        appCtx.get("#/home", homeController.loadHome);

        appCtx.get("#/about", homeController.loadAbout);
        appCtx.get("#/catalog", teamController.loadCatalog);
        appCtx.get("#/catalog/:id", teamController.loadTeamDetails);
        appCtx.get("#/login", accountController.loadLogin);
        appCtx.get("#/join/:id", teamController.joinTeam);
        appCtx.get("#/register", accountController.loadRegister);
        appCtx.get("#/create", teamController.loadCreate);
        appCtx.get("#/logout", accountController.logout);
        appCtx.post("#/create", teamController.createTeam);

         appCtx.post("#/register", accountController.registerUser);
            appCtx.post("#/login", accountController.loginUser);

    });
    app.run();
});