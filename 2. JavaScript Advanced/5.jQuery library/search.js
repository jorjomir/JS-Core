function search() {
    let counter=0;
    let word=$("#searchText").val();
    $("ul#towns li").each((index, town) => {
    if(town.textContent.includes(word)) {
        console.log(town.textContent);
        counter++;
        $(town).css("font-weight", "bold");
    } else {
        $(town).css("font-weight", "");
    }}
    );
    $("#result").text(counter+" matches found.");
}