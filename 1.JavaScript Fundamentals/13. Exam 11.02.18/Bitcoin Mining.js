function bitcoinMining(arr) {
    //arr.map(Number);
    let leva=0;
    let obryshtanevleva=67.51;
    let bitcoin=11949.16;
    let firstBitcoin=[];
    let splitted=arr.map(Number);
    //let splitted=arr.map(Number);
    /*for (let obj of arr) {
        splitted.push(obj.split(", ").map(Number));
    }*/
    let grams=0;
    for (let i = 0; i < splitted.length; i++) {
        if((i+1)%3===0) {
            grams=Number(splitted[i]*0.7);
        } if(leva>=bitcoin) {
            firstBitcoin.push(Number(i+1));
            leva-=bitcoin;
        } else{
            grams=Number(splitted[i]);
        }
        leva+=Math.round(grams*obryshtanevleva)
    }
    console.log(leva);
    console.log(firstBitcoin[0]);
    console.log(grams);
}
bitcoinMining(["100","200", "300"]);