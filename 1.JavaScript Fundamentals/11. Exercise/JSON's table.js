function jsonsTable(arr) {

    let html="<table>\n";
    for (let line of arr) {
        let obj=JSON.parse(line);
        html+="<tr>\n";
        html+=`\t<td>${htmlEscape(obj["name"])}</td>\n`;
        html+=`\t<td>${htmlEscape(obj["position"])}</td>\n`;
        html+=`\t<td>${obj["salary"]}</td>\n`;
        html+="<tr>\n";
    }
    html+="</table>";
    console.log(html);
    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}
jsonsTable(['{"name":"Pesho","position":"Promenliva","salary":100000}']);