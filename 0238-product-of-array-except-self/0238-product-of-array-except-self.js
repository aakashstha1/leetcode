/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(n) {
    let answer = [];
    let prefix =1;
    let suffix =1;

    for(let i=0;i<n.length;i++){
        answer[i]=prefix;
        prefix*=n[i];
    }

    for(let i=n.length-1;i>=0;i--){
        answer[i]=answer[i]*suffix;
        suffix*=n[i];
    }
   
    return answer;
};


const nums = [1,2,3,4];
console.log(productExceptSelf(nums));

