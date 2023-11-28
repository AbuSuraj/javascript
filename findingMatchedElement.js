const findMatchedItems = (arr, item)=>{
    // let indexes = [];
    // let currentIndex = arr.indexOf(item);
    // console.log('top: ', currentIndex)

    // while(currentIndex !== -1){
    //     indexes.push(currentIndex);
    //     console.log(currentIndex+1)
    //     currentIndex = arr.indexOf(item, currentIndex+1);
    //     console.log('inbside: ', currentIndex)
    // }
    // return indexes;

    return arr.map((element, index) => (element === item ? index : -1)).filter(index => index !== -1);

}
console.log(findMatchedItems([1,2,3,2,3,2], 2));