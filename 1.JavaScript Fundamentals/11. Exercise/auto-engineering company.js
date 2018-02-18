function autoEngineeringCompany(arr) {
    let all={};
    for (let line of arr) {
        let splitted=line.split(" | ");
        let marka=splitted[0];
        let model=splitted[1];
        let quantity=Number(splitted[2]);
        if(! all.hasOwnProperty(marka)) {
            all[marka]={};
            all[marka][model]=quantity;
        } else {
            if(! all[marka].hasOwnProperty(model)) {
                all[marka][model]=quantity;
            }else {
                all[marka][model]+=quantity;
            }
        }
    }
    for (let marka of Object.keys(all)) {
        console.log(marka);
        for (let model of Object.keys(all[marka])) {
            console.log(`###${model} -> ${all[marka][model]}`);
        }
    }
}
autoEngineeringCompany(["Audi | Q7 | 1000", "Audi | Q6 | 100", "BMW | X5 | 1000", "BMW | X6 | 100"]);
