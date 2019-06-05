
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {name: 'azra', cohort_id: 1},
        {name: 'ken', cohort_id: 2},
        {name: 'Rudy', cohort_id: 3},
        {name: 'Alexis', cohort_id: 1},
        {name: 'Diandra', cohort_id: 2},
        {name: 'Seth', cohort_id: 3},
      ]);
    });
};


//
// name: 'Lambda Student',
// cohort: 'Full Stack Web Infinity'



