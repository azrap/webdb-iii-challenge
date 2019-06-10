const express = require('express');
const Cohorts = require('./cohort-model.js')
const router = express.Router();



//CREATE:


//add a new cohort: tested
router.post('/', async (req, res) => {
    try {
    //   console.log(res)

    const cohort = await Cohorts.add(req.body);
      res.status(200).json(cohort);
    } catch (error) {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error adding the dang cohorts',
      });
    }
  });

//READ: tested

//get all cohorts: tested 
router.get('/', async (req, res) => {
    try {
    //   console.log(res)
   
   
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



  //get the cohort for an id: tested
  router.get('/:id', async (req, res) => {
    try {
    //   console.log(res)
   
    const cohort = await Cohorts.findById(req.params.id);
      res.status(200).json(cohort);
    } catch (error) {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the dang cohort by ID',
      });
    }
  });
  

  // get all students for a cohort id: tested
  router.get('/:id/students', async (req, res) => {

    try {
      const students = await Cohorts.findCohortStudents(req.params.id)
      console.log(req.params);
      res.status(200).json(students);
    } 
    catch (error) {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error getting the actions for the hub',
      });
    }
});



//update: tested

router.put('/:id', async (req, res) => {
    try {
    //   console.log(res)
    console.log('hello')
    const cohort = await Cohorts.update(req.params.id, req.body);

      res.status(200).json(cohort);
    } catch (error) {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error updating the dang cohorts',
      });
    }
  });



//delete:

router.delete('/:id', async (req, res) => {
    try {
    //   console.log(res)
    console.log('hello')
    const cohort = await Cohorts.remove(req.params.id);
      res.status(200).json(cohort);
    } catch (error) {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error updating the dang cohorts',
      });
    }
  });


  module.exports = router;
