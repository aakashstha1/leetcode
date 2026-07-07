/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(nums.length==0) return "";
    let arr1=[]
    let arr2=[]
    for(let i=0;i<nums.length;i++){
        if(nums[i]==0){
            arr2.push(nums[i]);
        }else{
            arr1.push(nums[i]);
        }
    }
    const new_arr = [...arr1,...arr2]
    for(let i=0;i<nums.length;i++){
        nums[i]=new_arr[i]
    }
    return nums;
    
};

console.log(moveZeroes([0,1,0,3,12]));