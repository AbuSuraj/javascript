var isAnagram = function(s, t) {
    const sArray = s.split("")
    sArray.sort();
    sortedS = sArray.join(""); 
    const tArray = t.split("")
    tArray.sort();
    sortedT = tArray.join(""); 
    return sortedS === sortedT ? true : false;
    
};

console.log(isAnagram("anagram","nagaram"));