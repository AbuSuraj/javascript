function lengthOfLIS(nums) {
    const dp = Array(nums.length).fill(1); // Array to store the lengths of increasing subsequences
    
    for (let i = 1; i < nums.length; i++) {
        
        console.log('i => ', i);
        console.log('nums[i]', nums[i]);
      for (let j = 0; j < i; j++) {
          console.log('j => ', j)
          console.log('nums[j] => ', nums[j]);
        if (nums[i] > nums[j]) {
            console.log('dp[i]' , dp[i])
          dp[i] = Math.max(dp[i], dp[j] + 1);
          console.log(dp[i], dp[j]+1);
          console.log('******');
          console.log(dp);
        }
      }
      console.log('-----------------')
    }
  
    return Math.max(...dp);
  }
  
  // Example usage
  const nums = [10, 9, 2, 5, 3, 7, 101, 18];
  const result = lengthOfLIS(nums);
  console.log(result); // Output: 4
  