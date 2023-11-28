/*
Write a JavaScript program to count the number of arrays inside a given array.

Test Data :
([2,8,[6],3,3,5,3,4,[5,4]]) -> 2
([2,8,[6,3,3],[4],5,[3,4,[5,4]]]) -> 3
Expected Output:
Number of arrays inside the said array: 2
Number of arrays inside the said array: 3
*/

const countArrayElement = arr =>{
    let count = 0;
    arr.forEach(a =>{
        // typeof a === 'object' ? count += 1 :''
           Array.isArray(a) ? count += 1 :''
    })
    return count
}

console.log(countArrayElement([2,8,[6,3,3],[4],5,[3,4,[5,4]]]))