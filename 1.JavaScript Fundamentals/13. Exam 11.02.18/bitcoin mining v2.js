function bitcoinMining(arr) {
    let splitted=arr.map(Number);
    let grams=0;
    let bitcoins=0;
    let firstbitcoin=[];
    let leva=0;
    for (let i = 0; i < splitted.length; i++) {
        if((i+1)%3===0) {
            grams=Number(splitted[i]*0.7);
        } else{
            grams=Number(splitted[i]);
        }
        leva+=grams*67.51;
        if(leva>=11949.16) {
            firstbitcoin.push(i+1);
            let num=Math.floor(leva/11949.16);
            leva-=num*11949.16;
            bitcoins+=num;
        }
    }
    if(bitcoins===0) {
        console.log(`Bought bitcoins: ${bitcoins}`);
        console.log(`Left money: ${leva.toFixed(2)} lv.`)
    } else {
        console.log(`Bought bitcoins: ${bitcoins}`);
        console.log(`Day of the first purchased bitcoin: ${firstbitcoin[0]}`);
        console.log(`Left money: ${leva.toFixed(2)} lv.`)
    }

}
bitcoinMining(["100", "200", "300"]);