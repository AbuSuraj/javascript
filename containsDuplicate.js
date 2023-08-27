var containsDuplicate = function(nums) {
     
    const duplicates =  { }
    let count = 0;
   for( const n of nums ) {
    if (duplicates[n]){
        return true;
    }
    duplicates[n] = true;
   }
   return false;
};

console.log(containsDuplicate([2,3,3,1]));