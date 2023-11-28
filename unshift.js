const arr = [2,4,1,6];
  arr.unshift(99,100,101);
  arr.push(99,100,101);
//   console.log(arr);

  let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
let weekends = ['Sat', 'Sun'];
days.unshift(...weekends)
console.log(days);