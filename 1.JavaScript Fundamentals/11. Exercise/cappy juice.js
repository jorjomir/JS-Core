function cappyJuice(arr) {
    let all={};
    let bottles={};
    for (let obj of arr) {
        let tokens=obj.split(" => ");
        let fruit=tokens[0];
        let quantity=Number(tokens[1]);
        if(! all.hasOwnProperty(fruit)) {
            all[fruit]=0;
        }
        all[fruit]+=quantity;
        if(all[fruit]>=1000) {
            bottles[fruit]=parseInt(all[fruit]/1000);
        }
    }
    for (let key of Object.keys(bottles)) {
        console.log(`${key} => ${bottles[key]}`)
    }

}
cappyJuice(["Orange => 2000","Peach => 1432", "Banana => 450", "Peach => 600", "Strawberry => 549"]);