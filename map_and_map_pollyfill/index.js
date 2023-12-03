const arr = [1, 2, 3, 4, 5, 6, 7, 8];

//map() function
let mapArr = arr.map((item, index, arr) => {
  return item * 2;
});
console.log("Using pre defined map() method " + mapArr);

//Polyfill for map()
Array.prototype.myMap = function (cb) {
  let arr = [];

  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i, this));
  }
  return arr;
};

console.log("Using pollyfil of map() method which is myMap() " + mapArr);
