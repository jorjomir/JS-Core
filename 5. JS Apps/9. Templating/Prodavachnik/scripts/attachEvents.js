function attachEvents() {
    async function test(context, url) {
        let source = await $.get(url);


        let template = Handlebars.compile(source);
        let instanceOfTemplate = template(context);

        $('main').append(instanceOfTemplate);
    }

    $('#linkRegister').click(async function () {
        let context = {
            viewType: 'viewRegister',
            headline: 'Please register here',
            formId: 'formRegister',
            buttonTypeUser: 'buttonRegisterUser',
            buttonText: 'Register'
        };
        await test(context, "templates/register-login.html");
        showView('viewRegister');

    });

    $('#linkLogin').click(async function () {
        let context = {
            viewType: 'viewLogin',
            headline: 'Please login here',
            formId: 'formLogin',
            buttonTypeUser: 'buttonLoginUser',
            buttonText: 'Login'
        };
        await test(context, "templates/register-login.html");
        showView('viewLogin');
    });

    $('#linkHome').click(function () {

        showView('viewHome');
    });

    $('#linkListAds').click(function () {
        showView('viewAds');
        listAds();
    });

    $('#linkCreateAd').click(function () {
        showView('viewCreateAd');
    });

    $('#linkLogout').click(function () {
        logoutUser();
    });

    $('#buttonRegisterUser').on('click', registerUser);
    $('#buttonLoginUser').on('click', loginUser)
    $('#buttonCreateAd').on('click', createAd)
    $('#buttonEditAd').on('click',uploadEditedAd)

    $(document).on({
        ajaxStart: function () {
            $("#loadingBox").show()
        },
        ajaxStop: function () {
            $("#loadingBox").hide()
        }
    })
}