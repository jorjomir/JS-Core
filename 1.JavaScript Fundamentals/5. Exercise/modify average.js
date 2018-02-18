function modifyAverage(num) {
    function getAverage(num) {
        let sbor=0;
        for (let i = 0; i < num.length; i++) {
            sbor+=Number(num[i]);
        }
        return sbor/num.length;
    }
    let average=getAverage(num);
    let addnine = num + "" +9;
    while(average<=5) {
        num=addnine;
        average=getAverage(num);
    }
    console.log(num);
}
modifyAverage("101");