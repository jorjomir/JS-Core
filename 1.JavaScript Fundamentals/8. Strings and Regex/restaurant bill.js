function restaurantBill(arr) {
    let sum=0;
    let output="You purchased";
    for (let i = 0; i < arr.length; i++) {
        if(i%2===0) {
            if(i===arr.length-2) {
                output+=" "+arr[i]+" ";
            }
            else{
                output+=" "+arr[i]+",";
            }

        }
        else{
            sum+=Number(arr[i]);
        }
    }
    output+="for a total sum of "+sum;
    console.log(output);
}
restaurantBill(['Cola', '1.35', 'Pancakes', '2.88']);