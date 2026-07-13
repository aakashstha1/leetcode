/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function(nums, k) {
    let target=k-1;
    let l=0
    let r= nums.length-1;
   

    while(l<=r){
        let randomIndex = l+ Math.floor(Math.random()*(r-l+1));
    
        [nums[r],nums[randomIndex]]=[nums[randomIndex],nums[r]];
    
        let [lt,gt]=partition(nums,l,r);

        if(target>=lt && target <= gt){
            return nums[target];
        }else if(target<lt){
           r=lt-1;
        }else{
            l=gt+1;
        }
    }
};

function partition(nums,l,r){
    let p = nums[r];
    let lt = l;
    let i=l;
    let gt=r;

    while(i<=gt){
        if(nums[i]>p){
            [nums[i],nums[lt]]=[nums[lt],nums[i]];
            i++;
            lt++;
        }else if(nums[i]<p){
            [nums[i],nums[gt]]=[nums[gt],nums[i]];
            gt--;
        }else{
            i++;
        }
    }
    
    return [lt,gt];
}
 

console.log(findKthLargest([3,2,1,5,6,4],4));