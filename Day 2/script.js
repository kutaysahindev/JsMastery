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

const Guy = {
  name: "Jonas",
  surName: "Schmedtmann",
  birthYear: 2000,
  hasDriversLicense: false,

  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  summarize: function () {
    console.log(
      `${this.name} is a ${this.calcAge()}-year old teacher, and he ${
        this.hasDriversLicense == true ? "has a" : "doesn't have a"
      } drivers license.`
    );
  },
};

console.log(Guy.calcAge());
Guy.summarize();
