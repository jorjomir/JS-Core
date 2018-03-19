function attachEvents() {
    $("#items").on("click","li", function () {
        let li=$(this);
        if(li.attr("data-selected")) {
            li.removeAttr("data-selected");
            li.css("background", "");
        } else {
            li.attr("data-selected", "true");
            li.css("background", "#DDD")
        }
    });
    $("#showTownsButton").on("click", function () {
        let towns=$("ul#items li[data-selected=true]").toArray().map(selected => selected.textContent);
        $("#selectedTowns").text("Selected towns: " + towns.join(", "))
    })

}