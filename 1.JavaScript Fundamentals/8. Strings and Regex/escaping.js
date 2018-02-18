function escaping(arr) {
    function replacing(str) {
        return str.replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
    let result="<ul>\n";
    for (let i = 0; i < arr.length; i++) {
        let str=arr[i];
        result+="  <li>"+replacing(str)+"</li>\n";
        //console.log(`<li>${str}</li>`);
    }
    result+="</ul>";
    console.log(result);
    
}
escaping(['<b>unescaped text</b>', 'normal text']);
