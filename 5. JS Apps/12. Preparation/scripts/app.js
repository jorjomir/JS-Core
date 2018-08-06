$(() => {
    const app=Sammy("#container", function () {
        this.use("Handlebars", "hbs");
        this.get("index.html", loadHomePage);
        this.get("#/home", loadHomePage);
        this.post("#/register", register);
        this.get("#/catalog", loadCatalog);
        this.post("#/login", login);
        this.get("#/logout", logout);




        function loadHomePage(ctx) {
            if(!auth.isAuth()) {
                ctx.isAuth=auth.isAuth();
                ctx.loadPartials({
                    header: "./templates/common/header.hbs",
                    footer: "./templates/common/footer.hbs"
                }).then(function () {
                    this.partial("./templates/welcome-anonymous.hbs")
                })
            }
        }
        function register(ctx) {
            let username=ctx.params.username;
            let password=ctx.params.password;
            let repeatPass = ctx.params.repeatPass;

            if (!/^[A-Za-z]{3,}$/.test(username)) {
                notify.showError('Username should be at least 3 characters long and contain only english alphabet letters');
            } else if (!/^[A-Za-z\d]{6,}$/.test(password)) {
                notify.showError('Password should be at least 6 characters long and contain only english alphabet letters');
            } else if (repeatPass !== password) {
                notify.showError('Passwords must match!');
            } else {
                auth.register(username, password)
                    .then((userData) => {
                        auth.saveSession(userData);
                        notify.showInfo('User registration successful!');
                        ctx.redirect('#/catalog');
                    })
                    .catch(notify.handleError);
            }
        }

        function loadCatalog(ctx) {
            ctx.isAuth=auth.isAuth();
            ctx.username=auth.getUsername;
            ctx.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs",
                navigation: "./templates/common/navigation.hbs"
            }).then(function () {
                this.partial("./templates/catalog/catalog.hbs")
            })
        }
    });

    function login(ctx) {
        let username=ctx.params.username;
        let password=ctx.params.password;
        if (username==="") {
            notify.showError('Please enter username!');
        } else if (password==="") {
            notify.showError('Please enter password!');
        } else {
            auth.login(username, password)
                .then((userData) => {
                    auth.saveSession(userData);
                    notify.showInfo('User login successful!');
                    ctx.redirect('#/catalog');
                })
                .catch(notify.handleError);
        }
    }
    function logout(ctx) {
        auth.logout().then(function () {
            sessionStorage.clear();
            notify.showInfo("Logout successful!");
            ctx.redirect("#/home");
        });
    }

    app.run();
});