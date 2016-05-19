/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var len=nums.length,i,j,k
        numSort=nums.sort(function(a,b){
            return a-b;
        });
    for(i=0;i<len;i++){
        if(numSort[i]===target/2){
            k=i;
            break;
        }
        if(numSort[i]>target/2){
            k=i-1;
            break;
        }
    }
    for(i=0;i<k;i++){
        for(j=k+1;j<len;j++){
            if(parseInt(numSort[i])+parseInt(numSort[j])==target){
                if(numSort[i]===numSort[j]){
                    i=nums.indexOf(numSort[i]);
                    j=nums.indexOf(numSort[j],i+1);
                }else{
                    i=nums.indexOf(numSort[i]);
                    j=nums.indexOf(numSort[j]);
                }
            }
            return [Math.min(i+1,j),Math.max(i+1,j)];
        }
    }
};
