function heroicInventory(arr) {

    let heroes=[];
    for (let i = 0; i < arr.length; i++) {
        let splitted=arr[i].split(/\s* \/ \s*/);
        let heroName=splitted[0];
        let heroLevel=Number(splitted[1]);
        let items=[];
        if(splitted.length>2) {
            items =splitted[2].split(", ");
        }
        let hero={"name": heroName, level: heroLevel, items: items};
        heroes.push(hero);
    }
    console.log(JSON.stringify(heroes));
}
heroicInventory(["Isacc / 25 / Apple, GravityGun", "Derek / 12 / BarrelVest, DestructionSword"]);