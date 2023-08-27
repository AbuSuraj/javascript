var  searchInsert = function (array, target) {
    let left = 0;
    let right = array.length - 1;
  
    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
  
      if (array[middle] === target) {
        return middle;  
      } else if (array[middle] < target) {
        left = middle + 1;  
      } else {
        right = middle - 1;  
      }
    }
  
    return left;  
  }
// var searchInsert = function(nums, target) {
//     const length = nums.length;
//     if(nums[length-1]< target){
//         return length;
//     }
//     if(nums[0]>target){
//        return 0;
//    }
//     for (let i = 0; i < length; i++) {
//      if( nums[i]< target && nums[i+1]> target){
//         if(nums[i]!==target || nums[i+1] !== target){
//             return i+1;
//         }
//     }
//     }
//         return binarySearch(nums, target); 

// };

// const result = searchInsert([1,3,5,6], 5)
const result = binarySearch([1,3,5,6], 2)
console.log(result)