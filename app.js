const express= requre('express');
const app = express();
const bodyparser = require('body-parser');

const port = 3000;

const userId = "heman_bhullar_03122002";

app.use(bodyparser.json());

app.post('/testbfhl.herojuapp.com/bfhl', (req, res) => {
    try{
        const data = req.body.data;

        if (!data || !Array.isArray(data)) {
      throw new Error('Invalid request: Missing or invalid data array');
    }

    const evenNumbers = [];
    const oddNumbers = [];
    const alphabets = [];

    for (const item of data) {
      if (typeof item === 'number') {
        if (item % 2 === 0) {
          evenNumbers.push(item);
        } else {
          oddNumbers.push(item);
        }
      } else if (typeof item === 'string') {
        alphabets.push(item.toUpperCase());
      } else {
        throw new Error('Invalid data type in input array');
      }
    }

    const response = {
      is_success: true,
      user_id: userId,
      email_id: "",
      roll_number: "",
      even_numbers: evenNumbers,
      odd_numbers: oddNumbers,
      alphabets: alphabets,
    };

    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ is_success: false, message: error.message });
    }
})

app.listen(port);
console.log("server started at http://testbfhl.herojuapp.com/bfhl");
