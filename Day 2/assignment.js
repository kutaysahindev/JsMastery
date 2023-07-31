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

console.log(percentageOfWorld1(199), percentageOfWorld1(248));

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

console.log(percentageOfWorld2(199), percentageOfWorld2(248));

// 3

const percentageOfWorld3 = (population) => (population / 7900) * 100;
console.log(percentageOfWorld3(199), percentageOfWorld3(248));
