function attachEvents() {
    let arr=[];
    $("#btnLoadTowns").on("click", function () {
        $("#root").empty();
        let box=$("#towns").val();
        let context={
            towns: []
        };
        context.towns=box.split(", ");
        if(context.towns.length!==0){
            let source=$("#towns-template").html();
            let template=Handlebars.compile(source);
            let html=template(context);
            $("#root").append(html);
        }
        $("#towns").val("");
    });

}