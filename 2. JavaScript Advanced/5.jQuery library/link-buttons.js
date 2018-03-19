function attachEvents() {
    $("a.button").on("click", listen);
    function listen() {
        $(".selected").removeClass("selected");
        $(this).addClass("selected");
    }
}