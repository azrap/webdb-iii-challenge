const knex=require('knex');
const knexConfig = require('../knexfile.js');
const express = require('express');
const db=knex(knexConfig.development);


module.exports = {
    find,
    findById,
    add,
    remove,
    update, 
  };



// Select * from students;

function find() {
    return db('students')

}

//Select * from students where id=x;

 function findById(id) {
    return db('students as s')
      .join('cohorts as c', 'c.id','s.cohort_id')
      .select('s.id', 's.name as name', 'c.name as cohort_name')
      .where({ 's.id': id });
}


// INSERT INTO students VALUES ('name');
function add(student){
    return db('students').insert(student);
}


function update(id, changes) {
    return db('students').where({id}).update(changes);

}

function remove(id) {
    return db('students')
      .where({ id })
      .del();
  }






