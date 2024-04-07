const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const Person = require('../models/Person');
const router = express.Router();

const secretKey = 'yourSecretKey'; 


router.use(bodyParser.json());

// Authentication endpoint
router.post('/', async (req, res) => {
  console.log(req.body)
  const { email, password } = req.body; // Change username to email
  const user = await Person.findOne({ email, password }); // Change find to findOne and search by email
  if (user) {
    const token = jwt.sign({ userId: user.id, role: user.role }, secretKey);
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});


module.exports = router 