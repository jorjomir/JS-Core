$(() => {
    const app = Sammy("#container", function () {
        this.use("Handlebars", "hbs");

        this.get('#/home', welcomePage);
        this.get('index.html', welcomePage);
        this.post("#/register", register);
        this.post("#/login", login);
        this.get("#/logout", logout);
        this.get("#/editor", editor);
        this.get("#/create/receipt", getcreateReceipt);
        this.post("#/create/receipt", createReceipt);
        this.get("#/delete/receipt/:receiptId", deleteReceipt);


        function welcomePage(ctx) {
            if (auth.isAuth()) {
                ctx.username = sessionStorage.getItem("username");
                ctx.isAuth = auth.isAuth();
            }
            ctx.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs",
            }).then(function () {
                this.partial("./templates/homePage.hbs")
            })
        }

        function register(ctx) {
            let username = ctx.params['username-register'];
            let password = ctx.params["password-register"];
            let repeatPassword = ctx.params["password-register-check"];
            if (username.length <= 5) {
                notify.showError("Username should be at least 5 characters long!")
            } else if (username === "") {
                notify.showError("Please enter username!")
            } else if (password === "") {
                notify.showError("Please enter password!")
            } else if (repeatPassword === "") {
                notify.showError("Please enter Repeat Paswword!")
            } else if (password !== repeatPassword) {
                notify.showError("Passwords must match!")
            } else {
                auth.register(username, password).then((userData) => {
                    auth.saveSession(userData);
                    notify.showInfo("You have successfuly registered!");
                    posts.createActiveReceipt();
                    ctx.redirect("#/editor");
                })
                    .catch(notify.handleError);
            }

        }

        function login(ctx) {
            let username = ctx.params['username-login'];
            let password = ctx.params["password-login"];
            if (username === "" || password === "") {
                notify.showError("Allfields should be non-empty!")
            } else {
                auth.login(username, password).then((userData) => {
                    auth.saveSession(userData);
                    notify.showInfo("You have successfully logged in!");
                    ctx.redirect("#/editor");
                })
                    .catch(notify.handleError);
            }
        }

        function logout(ctx) {
            auth.logout()
                .then(() => {
                    sessionStorage.clear();
                    ctx.redirect('#/home');
                })
                .catch(notify.handleError);
        }

        function editor(ctx) {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }
            let userId = sessionStorage.getItem("userId");
            posts.getActiveReceipt(userId).then((receipts) => {
                let sum = 0;
                receipts.forEach((p, i) => {
                    p.subTotal = (Number(p.total * p.productCount));
                    sum += p.subTotal;
                });
                ctx.username = sessionStorage.getItem("username");
                ctx.isAuth = auth.isAuth();
                ctx.posts = receipts;
                ctx.sum = sum.toFixed(2);
                ctx.loadPartials({
                    header: "./templates/common/header.hbs",
                    footer: "./templates/common/footer.hbs",
                    post: "./templates/editor/post.hbs"
                }).then(function () {
                    this.partial("./templates/editor/editor.hbs");
                })
            })
        }

        function createReceipt(ctx) {
            let type = ctx.params.type;
            let qty = ctx.params.qty;
            let price = ctx.params.price;
            if(isNaN(qty)) {
                notify.showError("Quantity should be a number!");
                return;
            } else if(type==="" || qty==="" || price==="") {
                notify.showError("Please enter all data!");
                return;
            } else if(isNaN(qty)) {
                notify.showError("Price should be a number!");
                return;
            }
            posts.createPost(type,qty,price, true).then(function () {
                notify.showInfo("You have successfully added!");
                ctx.redirect("#/editor");
            })
        }
        function getcreateReceipt(ctx) {
            ctx.isAuth = auth.isAuth();
            ctx.username = sessionStorage.getItem("username");
            ctx.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs",
            }).then(function () {
                this.partial("./templates/editor/editor.hbs");
            })
        }
        function deleteReceipt(ctx) {
            let receiptId = ctx.params.receiptId;

            posts.deletePost(receiptId)
                .then(() => {
                    notify.showInfo('Post deleted.');
                    ctx.redirect('#/editor');
                })
                .catch(notify.handleError);
        }
    })
    app.run();
})