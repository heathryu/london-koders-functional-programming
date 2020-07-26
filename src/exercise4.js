const exercise4 = () => {

  const koders = [
    { name: 'Heath', yearsOfExperience: 8 },
    { name: 'Jihyun', yearsOfExperience: 4 },
    { name: 'Jungyoung', yearsOfExperience: 2 },
    { name: 'Taeim', yearsOfExperience: 3 }
  ]

  // exercise: Rewrite the code below to be more 'functional'
  // hint - what function of array would you use to aggregate a data point fro a set of data?

  const getSumOfYearsOfExperience = (koders) => {
    let sumYearsOfExperience = 0;

    for (let i = 0; i < koders.length; i++) {
      sumYearsOfExperience += koders[i].yearsOfExperience;
    }

    return sumYearsOfExperience;
  }

  // end of exercise scope
  
  console.log(getSumOfYearsOfExperience(koders));
};

module.exports = exercise4;
