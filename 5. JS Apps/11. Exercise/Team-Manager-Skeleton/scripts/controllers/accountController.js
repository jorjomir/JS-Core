let accountController=(() => {
    function loginUser(ctx) {
        auth.login(ctx.params.username, ctx.params.password).then(function (userData) {
            auth.showInfo("You have logged in successfully!");
            auth.saveSession(userData);
            ctx.redirect("#/home");
        }).catch(function (err) {
            if(err.status===409) {
                auth.showError("This username has already been taken!");
            }
        })
    }
    function registerUser(ctx) {
        if(ctx.params.password===ctx.params.repeatPassword) {
            auth.register(ctx.params.username, ctx.params.password).then(function (userData) {
                auth.showInfo("You have registered successfully!");
                auth.saveSession(userData);
                ctx.redirect("#/home");
            }).catch(function (err) {
                if(err.status===409) {
                    auth.showError("This username has already been taken!");
                }
            })

        }
    }

    function loadLogin() {
        this.loadPartials({
            header: "./templates/common/header.hbs",
            footer: "./templates/common/footer.hbs",
            loginForm: "./templates/login/loginForm.hbs"
        }).then(function () {
            this.partial("./templates/login/loginPage.hbs")
        })
    }
    function loadRegister() {
        this.loadPartials({
            header: "./templates/common/header.hbs",
            footer: "./templates/common/footer.hbs",
            registerForm: "./templates/register/registerForm.hbs"
        }).then(function () {
            this.partial("./templates/register/registerPage.hbs")
        })
    }
    function logout(ctx) {
        console.log("aaaa");
        auth.logout();
        auth.showInfo("You have successfully logged out");
        delete sessionStorage.authtoken;
        ctx.redirect("#/home");
    }
    return{
        loginUser,
        loadLogin,
        registerUser,
        loadRegister,
        logout,
    }
})();