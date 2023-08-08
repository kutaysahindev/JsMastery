"use strict";

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} oranges.`;
//   return juice;
// }

// Arrays

// const friends = ["A", "B", "C"];
// console.log(friends.length);
// console.log(`My last friend is ${friends[friends.length - 1]}`);

// function calcAge(birthYear) {
//   return 2023 - birthYear;
// }

// const years = [1967, 1971, 2000, 2010];

// console.log(
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[2]),
//   calcAge(years[3])
// );

// Objects

// const Guy = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 27,
//   friends: ["Martha", "Steward", "Peter"],
// };

// console.log(
//   `${Guy.firstName} has ${Guy.friends.length} friends, and his best friend is called ${Guy.friends[0]}.`
// );

// this keyword

// const Guy = {
//   name: "Jonas",
//   surName: "Schmedtmann",
//   birthYear: 2000,
//   hasDriversLicense: false,

//   calcAge: function () {
//     this.age = 2023 - this.birthYear;
//     return this.age;
//   },

//   summarize: function () {
//     console.log(
//       `${this.name} is a ${this.calcAge()}-year old teacher, and he ${
//         this.hasDriversLicense == true ? "has a" : "doesn't have a"
//       } drivers license.`
//     );
//   },
// };

// console.log(Guy.calcAge());
// Guy.summarize();

// Loops

// for (let i = 1; i <= 10; i++) {
//   console.log(`Lifted the weight for ${i} times.`);
// }

const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2023 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

// // const types = [];

// for (let i = 0; i < jonasArray.length; i++) {
//   console.log(jonasArray[i]);
//   // types[i] = typeof jonasArray[i];
// }

// const years = [1992, 2003, 2000, 1996];
// const ages = [];

// // for (let i = 0; i < years.length; i++) {
// //   ages[i] = 2023 - years[i];
// // }

// console.log(ages);

// for (let i = 0; i < years.length; i++) {
//   ages.push(2023 - years[i]);
// }

// console.log(ages);

// const array = [1, 2, 3, 4];
// for (let i = array.length - 1; i >= 0; i--) {
//   console.log(i, array[i]);
// }
