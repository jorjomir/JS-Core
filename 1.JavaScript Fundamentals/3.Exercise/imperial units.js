function imperialUnits(a) {
    let ft=a/12;
    let inch=a%12;
    console.log(`${Math.floor(ft)}'-${inch}"`)
}
imperialUnits(55);