/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let s=0;
    for(let i=0; i<nums.length;i++){
       if(nums[i]!==0){
            [nums[i],nums[s]]=[nums[s],nums[i]];
            s++;
       }
    }

};

console.log(moveZeroes([1,2,0,3,0,4]));