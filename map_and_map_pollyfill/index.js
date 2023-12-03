const arr = [1, 2, 3, 4, 5, 6, 7, 8];

//map() function
let mapArr = arr.map((item, index, arr) => {
  return item * 2;
});
console.log("Using pre defined map() method " + mapArr);

//Polyfill for map()
Array.prototype.myMap = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

//testing
let myMapArr = arr.myMap((item, index, arr) => {
  return item * 2;
});

console.log("Using pollyfil of map() method which is myMap() " + myMapArr);
