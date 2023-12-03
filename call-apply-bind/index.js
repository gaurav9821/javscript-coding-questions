let obj1 = {
  firstName: "Gaurav",
  lastName: "Chachada",
};

let obj2 = {
  firstName: "Karishma",
  lastName: "Goyal",
};

/*Never use Arrow function here because "this" keyword works differently inside
arrow function because "this" keyword will point to it's parent scope inside arrow
function and as you can se there is no firstName and lastName in parent scope
or in global scope so this will give "this.firstName" as "undefined"*/
function printFullName(hometown, state, country) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " is from " +
      hometown +
      ", " +
      state +
      ", " +
      country
  );
}
//call()
console.log("-------call()------");
printFullName.call(obj1, "Nagpur", "Mahrashtra", "India");
printFullName.call(obj2, "Langley", "London", "UK");

//apply()
console.log("-------apply()------");
printFullName.apply(obj1, ["Nagpur", "Mahrashtra", "India"]);
printFullName.apply(obj2, ["Langley", "London", "UK"]);

//bind
console.log("-------bind()------");
const printMyName1 = printFullName.bind(obj1, "Nagpur", "Maharashtra");
printMyName1("India");
const printMyName2 = printFullName.bind(obj1, "Langley", "London");
printMyName2("UK");

/*
For all of above code output of console will be:
Gaurav Chachada from Nagpur, Maharashtra, India
Karishma Goyal from Langley, London, UK
*/

console.log(a);

let a = 10;
