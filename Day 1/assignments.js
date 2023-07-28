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

// if (population > 33000000) {
//   console.log(`${country}'s population is above average`);
// } else {
//   console.log(
//     `${country}'s population is ${33000000 - population} lower than the average`
//   );
// }

// 6

// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );
// if (numNeighbours == 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

// 7

// if (language === !"English" || population > 50000000 || isIsland == true) {
//   console.log(`${country} does not meet your criteria :(`);
// } else {
//   console.log(`You should live in ${country} :)`);
// }

// 8

// switch (language) {
//   case "chinese":
//     console.log("MOST number of of native speakers!");
//     break;
//   case "mandarin":
//     console.log("MOST number of native speakers!");
//     break;
//   case "spanish":
//     console.log("2nd place");
//     break;
//   case "english":
//     console.log("3rd place");
//     break;
//   default:
//     console.log("Great language too :D");
// }

// 9

console.log(
  `${country}'s population is ${
    population >= 33000000 ? "above" : "below"
  } average`
);
