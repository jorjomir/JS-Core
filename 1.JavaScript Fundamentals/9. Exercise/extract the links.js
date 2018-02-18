function extractTheLinks(arr) {
    let regex = /www\.[A-Za-z0-9\-]+(\.[a-z]+)+/g;
    let match;
    for (let sentence of arr) {
        while(match=regex.exec(sentence)) {
            console.log(match[0]);
        }
    }

}
extractTheLinks(["Internet - www.internet.com", "WebSpiders - www.webspiders101.com"]);