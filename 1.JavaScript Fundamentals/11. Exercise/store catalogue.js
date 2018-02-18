function storeCatalogue(arr) {
    arr.sort();
    let res={};
    for (let line of arr) {
        let splitted=line.split(" : ");
        let product=splitted[0];
        let price=Number(splitted[1]);
        res[product]=price;
    }
    let letter="";
    for (let key of Object.keys(res)) {
        if(letter!==key[0]) {
            letter=key[0];
            console.log(`${letter}`);
            console.log(`  ${key}: ${res[key]}`)
        } else {
            console.log(`  ${key}: ${res[key]}`)
        }
    }
}
storeCatalogue(["Appricot : 20.4", "Fridge : 1500", "TV : 1499", "Deodorant : 10", "Boiler : 300", "Apple : 1.25",
"Anti-Bug Spray : 15", "T-Shirt : 10"]);