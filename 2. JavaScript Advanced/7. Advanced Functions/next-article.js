function getArticleGenerator(articles) {
    let contentHolder=$("#content");
    return function () {
        if(articles.length>0) {
            contentHolder.append(`<article>${articles.shift()}</article>`);
        }
    }
}