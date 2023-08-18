"use strict";

// Global Scope - Top Level Code
function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    const output = `You are ${age} years old.`;
    console.log(output);
  }

  if (birthYear >= 1981 && birthYear <= 1996) {
    console.log(`Oh, you are millenial, ${firstName}`);
  }

  printAge();
  return age;
}

const firstName = "Jonas";
calcAge(1991);
// printAge() function is not accessible in here.
