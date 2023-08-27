var longestSubarray = function(nums) {
    const countArray = [];
    let c = 0;
    let co=0;
    length = nums.length;
    for(i = 0; i<length; i++){
        if(nums[i]===1){
            c++;
            co = 0;
            console.log('c1 => ', c);
        }
        else if(  nums[i]===0){
            console.log('c2 => ', c);
              co++;
              if(nums[i+1]===1){
              countArray.push(c);
              console.log(countArray)
              c = 0;
              }
              if(co===2){
                  countArray.pop();
              }
            console.log(countArray)
             }
        }
        // [1,1,0,0,1,1,1,0,1]
    // console.log(length);
      
    countArray.push(c);
    console.log('bottom => ',c,co, countArray)
    if(c === length){
        return length-1;
    }
    else if(c === 0){return 0;}
    else if(countArray.length === 1){return 1;}
    else {
        countArray.sort();
        // console.log(countArray[countArray.length-1])
        const sum = countArray[countArray.length-1]+countArray[countArray.length-2];
        console.log('sum ' ,sum)
        return sum
    }
}

const a = longestSubarray([1,0,0,0,0]);
console.log('a ', a)