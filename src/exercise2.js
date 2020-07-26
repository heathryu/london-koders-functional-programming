const exercise2 = () => {

  const numbers1 = [1, 3, 5, 6];
  const numbers2 = [4, 10, 24]

  // exercise: Rewrite the code below to be more 'functional'
  // hint - which higher order function of array would you use to check that all members satisfy a predicate?

  const numbersAreEven = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 !== 0) {
        return false;
      }
    }

    return true;
  }

  // end of exercise scope
  

  console.log(numbersAreEven(numbers1));
  console.log(numbersAreEven(numbers2));
};

module.exports = exercise2;
