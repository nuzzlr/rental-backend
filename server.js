const express = require('express')
const app = express();
const db = require('./db')
const cors = require('cors');

const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); // req.body
app.use(cors());

const PORT = process.env.PORT || 8080;


const secretKey = 'yourSecretKey';

app.get('/', function (req, res) {
    res.send('Welcome to our Hotel');
})


// Authorization middleware
const authorize = (req, res, next) => {
    let token = req.headers.authorization;
     token = token.replace('Bearer ', '');
    if (!token) return res.status(401).json({ message: 'Unauthorized' });
    
    // Verify the token
    let curr_user = jwt.verify(token, secretKey);
    if(curr_user) next();
    else res.send("failed")
  };
  

// Import the router files
const loginRoute = require('./routes/login');
const registrationRoute = require('./routes/registration');

// Use the routers
app.use('/login', loginRoute);
app.use('/register', registrationRoute);
  
app.listen(PORT, ()=>{
    console.log('listening on port 8080');
})
