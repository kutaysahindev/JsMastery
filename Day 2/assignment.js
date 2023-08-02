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
// const populations = [10, 20, 30, 40];

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

// const myCountry = {
//   country: "Turkey",
//   capital: "Ankara",
//   language: "Turkish",
//   population: 85,
//   neighbours: ["Bulgaria", "Greece", "Georgia"],
// };

// myCountry["population"] += 2;

// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
// );
