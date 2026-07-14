/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let missingCount=0;
    let target =k-1;

    for(let i =1;i<=2000;i++){
        if(!arr.includes(i)){
            missingCount++;
        }
        if(missingCount===k){
            return i;
            break;
        }
    }

};

console.log(findKthPositive([1,2,3,4],3));