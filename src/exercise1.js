const exercise1 = () => {
  const numbers = [1, 2, 3];

  // exercise: Rewrite the code below to be more 'functional'
  // hint - which higher order function of array would you use to map a set of data to another?

  const doubled = [];

  for (let i = 0; i < numbers.length; i++) {
    doubled[i] = numbers[i] * 2;
  }

  // end of exercise scope

  console.log(doubled);
};

module.exports = exercise1;
