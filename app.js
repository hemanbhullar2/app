const express= requre('express');
const app = express();

const port = 3000;

const mongoose = require('mongoose');

const user = mongoose.schema(
    'user_id':{type:String, required:true},
    'roll_number':{type:String, required:true},
    'odd_numbers':{type:Number, isOdd:true},
    'even_number':{type:Number, isEven:true},
    'alphabets':{type:String, isAlphabet: true},
);

app.post('/testbfhl.herojuapp.com/bfhl', (req, res) => {
    res.send(user);
})

app.listen(port);

console.log("server started at http://testbfhl.herojuapp.com/bfhl");