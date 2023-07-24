//1

const country = "Turkey";
const continent = "Ankara";
let population = 85000000;

// console.log(country, continent, population);

//2

const isIsland = false;
let language;
console.log(isIsland, population, country, language);

//3

language = "Turkish";

// 4

let halfOfPop = population / 2;
population++;
halfOfPop = population / 2;
// console.log(halfOfPop);
let description = `Turkey is in Europe, and ${population} people live in there`;
// console.log(description);

// 5

if (population > 33000000) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33000000 - population} lower than the average`
  );
}
