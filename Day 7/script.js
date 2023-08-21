"use strict";

// Global Scope - Top Level Code
// function calcAge(birthYear) {
//   const age = 2023 - birthYear;

//   function printAge() {
//     const output = `You are ${age} years old.`;
//     console.log(output);
//   }

//   if (birthYear >= 1981 && birthYear <= 1996) {
//     console.log(`Oh, you are millenial, ${firstName}`);
//   }

//   printAge();
//   return age;
// }

// const firstName = "Jonas";
// calcAge(1991);
// printAge() function is not accessible in here.

// Hoisting: lets you to use some variables before they're declared

// Example

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log("All products deleted!");
// }

// So, in this example, since the initial value of var is undefined, it's a falsy value, and it triggers the if statement.

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(2023 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 4);
