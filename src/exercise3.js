const exercise3 = () => {

  const koders = [
    { name: 'Heath', nationality: 'New Zealand' },
    { name: 'Jihyun', nationality: 'Republic of Korea' },
    { name: 'Jungyoung', nationality: 'United Kingdom'},
    { name: 'Taeim', nationality: 'Republic of Korea' }
  ]

  // exercise: Rewrite the code below to be more 'functional'
  // hint - what function of array would you use to extract out a subset of data that satisfies a predicate?

  const getKodersFromCountry = (koders, nationality) => {
    const kodersFromCountry = [];

    for (let i = 0; i < koders.length; i++) {
      if (koders[i].nationality === nationality) {
        kodersFromCountry.push(koders[i]);
      }
    }

    return kodersFromCountry;
  }

  // end of exercise scope
  
  console.log(getKodersFromCountry(koders, 'Republic of Korea'));
};

module.exports = exercise3;
