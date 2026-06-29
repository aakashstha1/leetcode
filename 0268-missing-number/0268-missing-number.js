
function missingNumber(nums) {
    let sum =0;
    n=nums.length
    for(let i =0;i<n;i++){
        sum+=nums[i];
    }
    let total_sum = n*(n+1)/2;
    return total_sum-sum;
    
};

console.log(missingNumber([3,0,1]))