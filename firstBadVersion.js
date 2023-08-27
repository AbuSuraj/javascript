var solution = function (isBadVersion){
    return function(n){
    let left = 1;
    let right = n;
  
    while (left <= right) {
       
      const middle = Math.floor((left + right) / 2);
  
      if (isBadVersion(middle)) {
        right = middle;
      
      } else {
        right = middle + 1;  
      }
    }

    return left;  

    }
}