var searchInsert = function(nums, target) {
    const length = nums.length;
    if(nums[length-1]< target){
        return length;
    }
    for (let i = 0; i < length; i++) {
     if(nums[0]>target){
        return 0;
    }
    else if( nums[i]< target && nums[i+1]> target){
        if(nums[i]!==target || nums[i+1] !== target){
            return i+1;
        }
    }
    else if(nums[i] === target){
        return i;
    }
}
};

// const result = searchInsert([1,3,5,6], 5)
const result = searchInsert([1,3,5,6], 7)
console.log(result)