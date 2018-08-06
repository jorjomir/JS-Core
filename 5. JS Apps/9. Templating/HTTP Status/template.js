$(() => {
    let context= {
        cats: window.cats
    };
    renderCatTemplate();

    function renderCatTemplate() {
        let source=$("#cat-template").html();

        let template=Handlebars.compile(source);
        let html=template(context);
        $("#allCats").html(html);
        attach();
    }
    function attach() {
        $(".btn-primary").click(function () {
            let element=$(this);
            //console.log(element.parent());
            if(element.text()==="Show status code") {
                element.text("Hide status code");
                element.next().show();
            } else {
                element.text("Show status code");
                element.next().hide();
            }
        })
    }

});
