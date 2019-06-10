const express = require('express');
const Students = require('./student-model.js')
const router = express.Router();





//CREATE:


//add a new student: tested
router.post('/', async (req, res) => {
    try {
    //   console.log(res)

    const student = await Students.add(req.body);
      res.status(200).json(student);
    } catch (error) {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error adding the dang students',
      });
    }
  });

//READ: tested

//get all students: tested 
router.get('/', async (req, res) => {
    try {
    //   console.log(res)
   
   
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



  //get the student for an id: tested
  router.get('/:id', async (req, res) => {
    try {
    //   console.log(res)
   
    const student = await Students.findById(req.params.id);
      res.status(200).json(student);
    } catch (error) {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the dang student by ID',
      });
    }
  });
  




//update: tested

router.put('/:id', async (req, res) => {
    try {
    //   console.log(res)
    console.log('hello')
    const student = await Students.update(req.params.id, req.body);

      res.status(200).json(student);
    } catch (error) {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error updating the dang students',
      });
    }
  });



//delete:

router.delete('/:id', async (req, res) => {
    try {
    //   console.log(res)
    console.log('hello')
    const student = await Students.remove(req.params.id);
      res.status(200).json(student);
    } catch (error) {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error updating the dang students',
      });
    }
  });


  module.exports = router;
