const knex=require('knex');
const knexConfig = require('../knexfile.js');
const express = require('express');
const db=knex(knexConfig.development);


module.exports = {
    find,
    // findById,
    // add,
    // remove,
    // update
  };



// Select * from zoo;

function find() {
    return db('students')

}