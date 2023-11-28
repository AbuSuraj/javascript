// 52. Write a JavaScript program to get all the indexes where NaN is found in a given array of numbers and NaN.

// Test Data :
// ([2, NaN, 8, 16, 32]) -> [1]
// ([2, 4, NaN, 16, 32, NaN]) -> [2,5]
// ([2, 4, 16, 32]) ->[]
// Expected Output:
// Original array: 2,NaN,8,16,32
// Find all indexes of NaN of the said array: 1
// Original array: 2,4,NaN,16,32,NaN
// Find all indexes of NaN of the said array: 2,5
// Original array: 2,4,16,32
// Find all indexes of NaN of the said array:

function indexOfNaN(arr){
   let ans = [];
   
   // solution 1
   arr.forEach((item, index)=>{   
        isNaN(item) ? ans.push(index) : '' ;      
 
})


    // console.log( ans);
    return ans;
}

const qus =[2, 4, NaN, 16, 32, NaN];
console.log(indexOfNaN(qus));
 
console.log(Array.from([2,3,4,5], x=> x+2));