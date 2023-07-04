function findUniqueElement(nums) {
    const a = [];
  const length = nums.length
  for (i =0; i< length; i++) {
    let count = 0;
      for( j= 0; j<length; j++){
          if(nums[i]===nums[j]){
              count++;
          }
      }
     if(count ===1){ a.push(nums[i])}
  }

  return a;
}

const nums = [-1,0];
const uniqueElement = findUniqueElement(nums);

console.log(uniqueElement); // Output: 1
