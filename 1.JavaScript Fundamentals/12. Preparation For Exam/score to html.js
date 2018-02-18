function scoreToHTML(str) {
    let arr=JSON.parse(str);
    let html="<table>\n";
    html+=`  <tr><th>name</th><th>score</th></tr>\n`;
    for (let obj of arr) {
        html+=`  <tr><td>${obj["name"]}</td><td>${obj["score"]}</td></tr>\n`
    }
    html+="</table";
    console.log(html);
}
scoreToHTML('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]');