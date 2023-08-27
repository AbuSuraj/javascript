/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const indexs =[];
   let left = 0;
   let right = nums.length-1;
   while(left <= right) {
       const mid = Math.floor((left + right) / 2);

       if(nums[mid] === target) {
           indexs.push(mid);

           let leftNeighbor = mid -1; 
           while(leftNeighbor>=0 && nums[leftNeighbor]==target){
                indexs.push(leftNeighbor)
               leftNeighbor--;
               }
               let rightNeighbor = mid + 1;
               while (rightNeighbor < nums.length && nums[rightNeighbor] === target) {
                   indexs.push(rightNeighbor);
                   rightNeighbor++;
                 }
                 break;
       }
       else if(nums[mid]< target){
           left = mid +1;
       }
       else {
           right = mid -1;
       }
   }

   if(indexs.length>1){
    indexs.sort((a, b) => a - b);
    console.log(indexs)
    let arr = [indexs[0], indexs[indexs.length-1]]
       return arr;
   }
   else if(indexs.length ===1 ) {
    indexs.push(indexs[0])
    return indexs
   }
   
  else return [-1,-1];
};

const numbers = [0,0,1,1,1,1,2,2,2,3,3,4,5,6,6,6,6,7,8];
const targetNumber = 3;
const indices = searchRange(numbers, targetNumber);
console.log(indices);