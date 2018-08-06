let teamController=(() => {
    function loadCatalog(ctx) {
        ctx.loggedIn=auth.isAuthenticated;
        ctx.username=auth.getUsername;

        teamsService.loadTeams().then((userData) => {
            ctx.teams=userData.map(e => {
                return {
                    _id: e._id,
                    name: e.name,
                    comment: e.description
                }
            });
            if(sessionStorage.getItem("teamId")==="undefined") {
                ctx.hasNoTeam=true;
            }

            this.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs",
                team: "./templates/catalog/team.hbs"
            }).then(function () {
                this.partial("./templates/catalog/teamCatalog.hbs")
            })
        })
    }
    function loadTeamDetails(ctx) {
        teamsService.loadTeamDetails(ctx.params.id).then((details) => {
            ctx.name=details.name;
            ctx.loggedIn=auth.isAuthenticated;
            ctx.username=auth.getUsername;
            ctx.comment=details.comment;
            ctx.isAuthor=details._acl.creator === auth.getUserId();
            ctx.members=details.members == null ?
                null : JSON.parse(details.members).map(e => {
                    if(e === auth.getUsername)
                        ctx.isOnTeam=true;
                    return {
                        username: e
                    }});
            this.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs",
                team: "./templates/catalog/team.hbs",
                teamMember: "./templates/catalog/teamMember.hbs",
                teamControls: "./templates/catalog/teamControls.hbs"
            }).then(function () {
                this.partial("./templates/catalog/details.hbs")
            })
        })
    }
    function joinTeam(ctx) {
        let teamId=ctx.params.id.substr(1);
        teamsService.joinTeam(teamId).then((details) => {
            ctx.loggedIn=auth.isAuthenticated();
            ctx.username=auth.getUsername();
            auth.showInfo("You have successfully joined team!");

        })
    }
    function loadCreate(ctx) {
        ctx.loggedIn=auth.isAuthenticated;
        ctx.username=auth.getUsername;
        this.loadPartials({
            header: "./templates/common/header.hbs",
            footer: "./templates/common/footer.hbs",
            createForm: "./templates/create/createForm.hbs"
        }).then(function () {
            this.partial("./templates/create/createPage.hbs")
        });
    }
    function createTeam(ctx) {
        let name=ctx.params.name;
        let comment=ctx.params.comment;
        teamsService.createTeam(name, comment).then(function () {
            auth.showInfo("You have created team successfully!");

        })
    }
    return {
        loadCatalog,
        loadTeamDetails,
        joinTeam,
        loadCreate,
        createTeam,
    }
})();