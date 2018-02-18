function smallest2Nums(nums) {
    nums.map(Number);
    nums.sort((a, b) => a-b);
    let result=nums.slice(0,2);
    console.log(result.join(' '));
}