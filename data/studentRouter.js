const express = require('express');
const Students = require('./student-model.js')
const router = express.Router();



//READ: 

//get all zoos: tested via postman
router.get('/', async (req, res) => {
    try {
    //   console.log(res)
    console.log(Students);
    console.log('hello')
    const students = await Students.find();

      res.status(200).json(students);
    } catch (error) {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the dang students',
      });
    }
  });


  module.exports = router;