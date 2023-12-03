const arr = [1, 2, 3, 4, 5, 6, 7, 8];

//map() function
let filterArr = arr.filter((item, index, arr) => {
  if (item % 2 == 0) {
    return item;
  }
});
console.log("Using pre defined filter() method " + filterArr);

//Polyfill for filter()
Array.prototype.myFilter = function (cb) {
  const temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};
//testing of pollyfill
let myFilterArr = arr.myFilter((item, index, arr) => {
  if (item % 2 == 0) {
    return item;
  }
});
console.log("Using pollyfill of filter() method " + myFilterArr);
