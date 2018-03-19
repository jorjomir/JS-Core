function increment(selector) {
    let container=$(selector);
    let fragment=document.createDocumentFragment();
    let textarea=$('<textarea>');
    let incrementBtn=$("<button>Increment</button>");
    let addBtn=$("<button>Add</button>");
    let list=$("<ul>");
    //Textarea formation
    textarea.val(0);
    textarea.addClass("counter");
    textarea.attr("disabled", true);

    //Buttons formation
    incrementBtn.addClass("btn");
    incrementBtn.attr("id","incrementBtn");
    addBtn.addClass("btn");
    addBtn.attr("id", "addBtn");

    //List formation
    list.addClass("results");

    // Events
    $(incrementBtn).on("click", function () {
        textarea.val(+textarea.val()+1)
    });
    $(addBtn).on("click", function () {
        let li=$(`<li>${textarea.val()}</li>`);
        li.appendTo(list);
    });
    textarea.appendTo(fragment);
    incrementBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    list.appendTo(fragment);
    container.appendTo(fragment);

}