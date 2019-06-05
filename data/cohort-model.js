const knex=require('knex');
const knexConfig = require('../knexfile.js');
const express = require('express');
const db=knex(knexConfig.development);


module.exports = {
    find,
    findById,
    findCohortStudents, 
    add,
    remove,
    update, 
  };



// Select * from cohorts;

function find() {
    return db('cohorts')

}

//Select * from cohorts where id=x;

 function findById(id) {
    return db('cohorts').where({id}); //can also say ('id', id)
}

function findCohortStudents(id) {
    return db('students as s')
      .join('cohorts as c', 's.cohort_id', 'c.id')
      .select('s.id', 's.name as name', 'c.name as cohort_name', 'c.id as cohortId', 'c.name as cohortName')
      .where({ cohort_id: id });
  }


// INSERT INTO cohorts VALUES ('name');
function add(cohort){
    return db('cohorts').insert(cohort);
}


function update(id, changes) {
    return db('cohorts').where({id}).update(changes);

}

function remove(id) {
    return db('cohorts')
      .where({ id })
      .del();
  }


//    Cohort table  {
//     "id": 4,
//     "name": "Web19",
//     "created_at": "2019-06-05 20:11:30",
//     "updated_at": "2019-06-05 20:11:30"
// },

// { student table
//     "id": 1,
//     "name": "azra",
//     "created_at": "2019-06-05 20:11:30",
//     "updated_at": "2019-06-05 20:11:30",
//     "cohort_id": 1
// },