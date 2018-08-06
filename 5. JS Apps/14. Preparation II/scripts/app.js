$(() => {
    const app = Sammy("#main", function () {
        this.use("Handlebars", "hbs");
        this.get("#/home", welcomePage);
        this.get("skeleton.html", welcomePage);
        this.post("#/register", register);
        this.post("#/login", login);
        this.get("#/mainFeed", mainFeed);
        this.post("#/postChirp", postChirp);
        this.get("#/me", me);
        this.get("#/logout", logout);
        this.get("#/discover", discover)
        this.get("#/user/:id/:username", userProfile)
        this.get("#/follow/:id/:username", follow);
        this.post("#/follow/:id/:username", follow);

        function welcomePage(ctx) {
            /*if(auth.isAuth) {
                
            }*/
            ctx.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs",
                loginForms: "./templates/loginForms.hbs"
            }).then(function () {
                this.partial("./templates/homeAnonymous.hbs");
            })

        }
        function register(ctx) {
            let username = ctx.params.username;
            let password = ctx.params.password;
            let repeatpass = ctx.params.repeatPass;
            if ($.type(username) !== "string") {
                notify.showError("Please enter a valid username!");
            } else if (username.length < 5) {
                notify.showError("Username should be at least 5 characters long!");
            } else if (username === "" || password === "" || repeatpass === "") {
                notify.showError("Please enter all input fields!");
            } else if (password !== repeatpass) {
                notify.showError("Passwords should be the same!")
            }
            else {
                auth.register(username, password).then((userData) => {
                    auth.saveSession(userData);
                    notify.showInfo("Successful register!");
                    ctx.redirect("#/mainFeed");
                })
            }
        }
        function login(ctx) {
            let username = ctx.params.username;
            let password = ctx.params.password;
            auth.login(username, password).then((userData) => {
                auth.saveSession(userData);
                notify.showInfo("Successful Login!");
                ctx.redirect("#/mainFeed");
            }).catch(notify.handleError);
        }
        function mainFeed(ctx) {
            let username = sessionStorage.getItem("username");
            ctx.username = username;
            let chirpsCount = 0;
            let subs = JSON.parse(sessionStorage.getItem('subscriptions'));
            subs = subs.map(e => `"${e}"`);
            posts.getAllPosts(subs).then((chirps) => {
                chirps.forEach(e => {
                    chirpsCount += 1;
                    e.time = calcTime(e._kmd.ect);
                })
                ctx.chirps = chirps;
                ctx.followingCount = subs.length;
                ctx.chirpsCount = chirpsCount;
                ctx.loadPartials({
                    header: "./templates/common/header.hbs",
                    footer: "./templates/common/footer.hbs",
                    navigation: "./templates/navigation.hbs",
                    chirpsInMain: "./templates/chirpsInMain.hbs"
                }).then(function () {
                    this.partial("./templates/mainFeed.hbs");
                })
            })

        }
        function postChirp(ctx) {
            let text = ctx.params.text;
            let author = sessionStorage.getItem("username");
            posts.createPost(author, text).then(function () {
                notify.showInfo("Chirp Posted!");
                ctx.redirect("#/me");
            })
        }
        function me(ctx) {
            let username=sessionStorage.getItem("username");
            ctx.username = username;
            let chirpsCount=0;
            posts.getMyChirps(username).then((chirps) => {
                chirps.forEach(e => {
                    chirpsCount+=1;
                    e.time = calcTime(e._kmd.ect)
                })
                ctx.chirpsCount=chirpsCount;
                ctx.chirps = chirps;
                ctx.loadPartials({
                    header: "./templates/common/header.hbs",
                    footer: "./templates/common/footer.hbs",
                    navigation: "./templates/navigation.hbs",
                    chirpsInMain: "./templates/chirpsInMain.hbs"
                }).then(function () {
                    this.partial("./templates/me.hbs");
                })
            })
        }
        function logout(ctx) {
            auth.logout().then(function () {
                sessionStorage.clear();
                notify.showInfo("Sucessfully logged out!")
                ctx.redirect("#/home");

            })
        }
        function discover(ctx) {
            
            // posts.getFollowers().then(function(follows) {
            //     let followers=follows.length;
            // })
            posts.getUsers().then(function(users) {
                $.each(users, (index,item) => {
                    let username=users[index].username;
                    if(username!==sessionStorage.getItem("username")) {
                        item.author=username;
                    }
                    
                })
                ctx.users=users;
                ctx.loadPartials({
                    header: "./templates/common/header.hbs",
                    footer: "./templates/common/footer.hbs",
                    navigation: "./templates/navigation.hbs",
                    usersInDiscover: "./templates/usersInDiscover.hbs"
                }).then(function() {
                    this.partial("./templates/discover.hbs")
                })
            })
            
        }
        function userProfile(ctx) {
            console.log(ctx.params.id);
            console.log(ctx.params.username);
            let username=ctx.params.username
            console.log(username);
            let chirpsCount=0;
            posts.getMyChirps(username).then((chirps) => {
                chirps.forEach(e => {
                    chirpsCount+=1;
                    e.time = calcTime(e._kmd.ect)
                })
                ctx._id=ctx.params.id;
                ctx.username=username;
                ctx.chirpsCount=chirpsCount;
                ctx.chirps = chirps;
                ctx.loadPartials({
                    header: "./templates/common/header.hbs",
                    footer: "./templates/common/footer.hbs",
                    navigation: "./templates/navigation.hbs",
                    chirpsInUser: "./templates/chirpsInUser.hbs"
                }).then(function () {
                    this.partial("./templates/user.hbs");
                })
            })
        }
        function follow(ctx) {
            let id=ctx.params.id;
            console.log(id);
            let subs=JSON.parse(sessionStorage.getItem("subscriptions"));
            subs.push(ctx.params.username);
            posts.follow(subs, id);
        }






        function calcTime(dateIsoFormat) {
            let diff = new Date - (new Date(dateIsoFormat));
            diff = Math.floor(diff / 60000);
            if (diff < 1) return 'less than a minute';
            if (diff < 60) return diff + ' minute' + pluralize(diff);
            diff = Math.floor(diff / 60);
            if (diff < 24) return diff + ' hour' + pluralize(diff);
            diff = Math.floor(diff / 24);
            if (diff < 30) return diff + ' day' + pluralize(diff);
            diff = Math.floor(diff / 30);
            if (diff < 12) return diff + ' month' + pluralize(diff);
            diff = Math.floor(diff / 12);
            return diff + ' year' + pluralize(diff);
            function pluralize(value) {
                if (value !== 1) return 's';
                else return '';
            }
        }
        function getFollowers(username) {
             posts.getFollowers(username).then(function (num) {
                return num.length;
            })
        }
        

    })
    app.run();
}) 