function findUniqueElement(nums) {
//       // Step 1: Find the intersection point of the two pointers
//   let tortoise = nums[0];
//   let hare = nums[0];

//   do {
//     tortoise = nums[tortoise];
//     hare = nums[nums[hare]];
//   } while (tortoise !== hare);

//   // Step 2: Find the entrance to the cycle
//   let ptr1 = nums[0];
//   let ptr2 = tortoise;

//   while (ptr1 !== ptr2) {
//     ptr1 = nums[ptr1];
//     ptr2 = nums[ptr2];
//   }

//   // Return the duplicate number
//   return ptr1;

const numSet = new Set();
  
  for (let num of nums) {
    if (numSet.has(num)) {
      return num; // Found duplicate
    }
    numSet.add(num);
  }
}

const nums = [1, 3, 4, 2, 2];
const uniqueElement = findUniqueElement(nums);

console.log(uniqueElement); // Output: 1
