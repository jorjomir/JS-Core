let homeController= (() => {
    function loadHome(ctx) {
        ctx.loggedIn=auth.isAuthenticated;
        ctx.username=auth.getUsername;
        this.loadPartials({
            header: "./templates/common/header.hbs",
            footer: "./templates/common/footer.hbs"
        }).then(function () {
            this.partial("./templates/home/home.hbs")
        })
    }
    function loadAbout(ctx) {
        ctx.loggedIn=auth.isAuthenticated;
        ctx.username=auth.getUsername;
        this.loadPartials({
            header: "./templates/common/header.hbs",
            footer: "./templates/common/footer.hbs"
        }).then(function () {
            this.partial("./templates/about/about.hbs")
        })
    }
    return {
        loadHome,
        loadAbout
    }
})();