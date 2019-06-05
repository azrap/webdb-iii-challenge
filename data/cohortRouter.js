const express = require('express');
const Cohorts = require('./cohort-model.js')
const router = express.Router();



//READ: 

//get all zoos: tested via postman
router.get('/', async (req, res) => {
    try {
    //   console.log(res)
    console.log(Cohorts);
    console.log('hello')
    const cohorts = await Cohorts.find();

      res.status(200).json(cohorts);
    } catch (error) {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the dang cohorts',
      });
    }
  });


  module.exports = router;
