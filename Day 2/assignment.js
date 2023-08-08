// 1

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// let count1 = describeCountry("Turkey", 85, "Ankara");
// let count2 = describeCountry("Finland", 6, "Helsinki");

// console.log(count1);
// console.log(count2);

// 2

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

// console.log(percentageOfWorld1(199), percentageOfWorld1(248));

// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };

// console.log(percentageOfWorld2(199), percentageOfWorld2(248));

// // 3

// const percentageOfWorld3 = (population) => (population / 7900) * 100;
// console.log(percentageOfWorld3(199), percentageOfWorld3(248));

// 4

// function describePopulation(country, population) {
//   return `${country} has ${population} million people, which is about ${percentageOfWorld1(
//     population
//   )}% of the world.`;
// }

// console.log(describePopulation("Turkey", 85));

// 5
const populations = [10, 20, 30, 40];

// console.log(populations.length === 4 ? true : false);

// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];

// console.log(percentages);

// 6

// const neighbours = ["Greece", "Albenia", "Italy"];

// neighbours.push("Utopia");
// neighbours.pop();
// if (!neighbours.includes("Germany"))
//   console.log("Probably not a central European country :D");
// neighbours[1] = "Turkey";
// console.log(neighbours);

// 7

const myCountry = {
  country: "Turkey",
  capital: "Ankara",
  language: "Turkish",
  population: 85,
  neighbours: ["Bulgaria", "Greece", "Georgia"],

  describe: function () {
    this.checkIsland();
    console.log(
      `${this.country} has ${this.population} million ${
        this.language
      } speaking people. And ${this.country} ${
        this.isIsland == true ? "is" : "is not"
      } an island.`
    );
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length == 0 ? true : false;
  },
};

// myCountry["population"] += 2;

// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
// );

// 8
// myCountry.describe();

// for (let i = 1; i <= 50; i++) {
//   console.log(`Voter number ${i} is currently voting`);
// }
// const percentages2 = [];
// console.log(percentages2);

// for (let i = 0; i < populations.length; i++) {
//   percentages2.push(percentageOfWorld1(populations[i]));
// }

// console.log(percentages2);

// let listOfNeighbours = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"],
// ];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//   for (let j = 0; j < listOfNeighbours[i].length; j++) {
//     console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
//   }
// }

const percentages3 = [];
let i = 0;
while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}

console.log(percentages3);
