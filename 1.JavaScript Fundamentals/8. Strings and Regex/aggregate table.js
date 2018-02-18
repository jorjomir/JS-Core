function aggregateTable(arr) {
let city, sum=0, income;
let list=[];
    for (let i = 0; i < arr.length; i++) {
        let townData=arr[i].split('|');
        let city=townData[1].trim();
        income=Number(townData[2].trim());
        sum+=income;
        list.push(city);
    }
    console.log(list.join(", "));
    console.log(sum)
}
aggregateTable(['| Sofia           | 300', '| Veliko Tarnovo  | 500', '| Yambol          | 275']);