Array.prototype.snail = function(rowsCount, colsCount) {
    // Check for invalid inputs
    if (this.length !== rowsCount * colsCount) {
      return [];
    }
  
    // Initialize the result 2D array
    const result = Array.from({ length: rowsCount }, () => []);
  
    // Fill the result array in snail traversal order
    let currentNumber = 0;
    for (let col = 0; col < colsCount; col++) {
      if (col % 2 === 0) {
        for (let row = 0; row < rowsCount; row++) {
          result[row][col] = this[currentNumber++];
          console.log(`from even: row ${row} col ${col} = ${result[row][col]}`);
        }
      } else {
        for (let row = rowsCount - 1; row >= 0; row--) {
          result[row][col] = this[currentNumber++];
          console.log(`from odd: row ${row} col ${col} = ${result[row][col]}`);
        }
      }
    }
  
    return result;
  };


//   // First, we create a special way to arrange our numbers
// Array.prototype.snail = function(rowsCount, colsCount) {
//     // Check if the number of boxes matches the numbers we have
//     if (this.length !== rowsCount * colsCount) {
//       return [];  // If not, we can't make a snail pattern, so we give an empty result
//     }
  
//     // Now, let's make the paper where we'll draw our snail pattern
//     const result = Array.from({ length: rowsCount }, () => []);
  
//     // Here's where the fun part begins! We start placing our numbers like a snail
//     let currentNumber = 0;  // This helps us keep track of which number we're using
  
//     for (let col = 0; col < colsCount; col++) {
//       if (col % 2 === 0) {
//         // If the column number is even, we go down the paper
//         for (let row = 0; row < rowsCount; row++) {
//           result[row][col] = this[currentNumber++];
//         }
//       } else {
//         // If the column number is odd, we go up the paper
//         for (let row = rowsCount - 1; row >= 0; row--) {
//           result[row][col] = this[currentNumber++];
//         }
//       }
//     }
  
//     return result;  // Our snail pattern is ready!
//   };
  
//   // Now, let's use our special snail method on a list of numbers
//   const inputArray = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15];
//   const rowsCount = 5;
//   const colsCount = 4;
  
//   // Call the snail method to make our snail pattern
//   const snailArray = inputArray.snail(rowsCount, colsCount);
  
//   // Finally, let's see what our snail pattern looks like
//   for (const row of snailArray) {
//     console.log(row);
//   }
  
  
  // Example input array and dimensions
  const inputArray = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15];
  const rowsCount = 5;
  const colsCount = 4;
  
  // Call the snail method on the input array
  const snailArray = inputArray.snail(rowsCount, colsCount);
  
  // Print the snail traversal matrix
  for (const row of snailArray) {
    console.log(row);
  }
  