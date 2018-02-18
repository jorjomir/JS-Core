function sumandvat(nums) {
    let sum=0;
    for(i=0; i<nums.length; i++) {
        sum+=nums[i];
    }
    let vat=sum*0.2;
    let total=sum+vat;
    console.log(`sum = ${sum}`);
    console.log(`VAT = ${vat}`);
    console.log(`total = ${total}`)
}