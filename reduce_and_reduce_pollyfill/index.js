const arr = [1, 2, 3, 4, 5, 6, 7, 8];

//redu e() function
let reducedArr = arr.reduce((acc, curr, index, arr) => {
  // acc = 0+1 = 1
  //acc = 1+2 = 3
  //acc = 3+3 = 6
  //acc = 6+ 4 =10.......
  acc = acc + curr;
  return acc;
}, 0);
console.log("Using pre defined filter() method " + reducedArr);

//Polyfill for reduce()
Array.prototype.myReduce = function (cb, initialValue) {
  let finalValue = initialValue !== undefined ? initialValue : this[0];
  for (let i = 0; i < this.length; i++) {
    finalValue = cb(finalValue, this[i], i, this);
  }
  return finalValue;
};
//testing of pollyfill
let myReducedArr = arr.myReduce((acc, curr, index, arr) => {
  // acc = 0+1 = 1
  //acc = 1+2 = 3
  //acc = 3+3 = 6
  //acc = 6+ 4 =10.......
  acc = acc + curr;
  return acc;
}, 0);
console.log("Using pollyfill of reduce() method " + myReducedArr);
