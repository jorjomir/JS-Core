function colourfulNumbers(n) {
    console.log("<ul>");
    for(i=1;i<=n;i++) {
        let color='blue';
        if(i%2!==0) {
            color='green';
        }
        console.log(`<li><span style='color: ${color}'>${i}</span></li>\n`)
    }
    console.log("</ul>");
}