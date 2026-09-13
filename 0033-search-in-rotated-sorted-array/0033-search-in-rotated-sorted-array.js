/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l=0;
    let r=nums.length-1;
    while (l <= r) {
        let m = Math.floor((l + r) / 2);

        // Target found
        if (nums[m] === target) {
            return m;
        }

        // Left half is sorted
        if (nums[l] <= nums[m]) {

            // Target is inside the sorted left half
            if (target >= nums[l] && target < nums[m]) {
                r = m - 1;
            } 
            // Target is in the right half
            else {
                l = m + 1;
            }

        // Right half is sorted
        } else {

            // Target is inside the sorted right half
            if (target > nums[m] && target <= nums[r]) {
                l = m + 1;
            } 
            // Target is in the left half
            else {
                r = m - 1;
            }
        }
    }

    return -1;
};

let nums = [5,6,7,0,1, 2,3,4]
let target = 1

console.log(search(nums,target));