const exercise5 = () => {
  const koders = [
    { name: "Heath", company: "Tractable" },
    { name: "Jihyun", company: "Credit Karma" },
    { name: "Jungyoung", company: "Lloyd's Banking Group" },
    { name: "Taeim", company: "Blackwell's" },
  ];

  // exercise: Rewrite the code below to be more 'functional'
  // hint - what function of array would you use to perform some operations (most likely with side-effects) on a set of data?

  const printKodersCompany = (koders) => {

    for (let i = 0; i < koders.length; i++) {
      console.log(koders[i].company);
    }
  };

  // end of exercise scope

  printKodersCompany(koders);
};

module.exports = exercise5;
