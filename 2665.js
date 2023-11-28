// var createCounter = function(init) {
   
//     // let counter;
//     // return {
//     //     increment:function(){

//     //         return currentValue++;
//     //     },
//     //     decrement:function(){
//     //         return currentValue--;
//     //     },
//     //     reset:function(){
//     //         init = currentValue;
//     //         return currentValue;
//     //     },
//     // }
//     let currentValue = init;
//     const increment =  () =>{ currentValue++; return currentValue}
//    const decrement =  () =>{ currentValue--; return currentValue}
//   const reset =  () => {
//         init = currentValue;
//         return currentValue;
//     }
//     return {
//         increment, decrement, reset
//     }
// };

// const counter = createCounter(5)
// console.log(counter.increment())
// console.log(counter.decrement())
// console.log(counter.reset())