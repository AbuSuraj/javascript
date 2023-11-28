// 51. Write a JavaScript program to check if an array is a factor chain or not.

// A factor chain is an array in which the previous element is a factor of the next consecutive element. The following is a factor chain:
// [2, 4, 8, 16, 32]
// // 2 is a factor of 4
// // 4 is a factor of 8
// // 8 is a factor of 16
// // 16 is a factor of 32

// Test Data :
// ([2, 4, 8, 16, 32]) -> true
// ([2, 4, 16, 32, 64]) -> true
// ([2, 4, 16, 32, 68]) -> false

const factorChain = ar =>{
    let isFactor = false;
    for (let i = 0; i < ar.length-1; i++){
        console.log(ar[i], ar[i+1]);
        if(ar[i]*2 === ar[i+1]){isFactor = true;}
        else{
            isFactor = false;
            break;
             
        }
    }
    return isFactor;
}

const ques= [2,4,8,16,32,64]
const ques2= [2,4,8,16,32,68]

console.log(factorChain(ques));
console.log(factorChain(ques2));