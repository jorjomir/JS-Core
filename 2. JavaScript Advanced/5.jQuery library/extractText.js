function extractText() {
    let text=$("#items li").toArray().map(li => li.textContent);
    console.log(text.join(" "));
    $("#result").text(text.join(", "));
}