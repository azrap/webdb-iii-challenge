const express = require('express');

//instantiating server
const server = express();

//global middleware:
server.use(express.json()); // built-in mw
// server.use(logger);


server.get('/', (req, res) => {
    res.send(`<h2>Let's do this cohort business!</h2>`)
  });


  //routing and API:
  
  const cohortRouter = require('./data/cohortRouter.js');
  const studentRouter = require('./data/studentRouter.js');
  server.use('/api/cohorts', cohortRouter);
  server.use('/api/students', studentRouter);
  
module.exports = server;