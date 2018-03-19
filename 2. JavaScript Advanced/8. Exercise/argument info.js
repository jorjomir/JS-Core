function argumentInfo() {
    let dict={};
    for (let obj of arguments) {
        console.log(typeof obj+": "+obj);
        let type=typeof obj;
        if(dict.hasOwnProperty(typeof obj)) {
            dict[type]++;
        } else {
            dict[type]=1;
        }
    }
    /*for (let t of Object.keys(dict)) {
        console.log(t+" = "+dict[t]);
    }*/
    Object.keys(dict).sort((a,b) => dict[b] - dict[a]).forEach(k => console.log(`${k} = ${dict[k]}`));
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); });