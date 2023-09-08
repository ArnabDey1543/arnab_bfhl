const express = require('express')
const app = express()
const path = require('path')


app.use(express.json());


app.get('/', (req, res) => {
    res.send("App running")
})


app.post('/bfhl', (req, res) => {
    const data = req.body.data
    var alphabetsArray = [];
    var numbersArray = [];
    var highest_alphabet = [];

    if (data) {
        data.forEach(item => {
            if (isNaN(item)) {
                alphabetsArray.push(item);
                if (!highest_alphabet.length || item > highest_alphabet[0]) {
                    highest_alphabet = [item];
                } else if (item === highest_alphabet[0]) {
                    highest_alphabet.push(item);
                }
            } else {
                numbersArray.push(item);
            }
        })
    }

    res.send({ is_success: "true", user_id: "Arnab_Dey_26122002", email: "ad1543@srmist.edu.in", roll_number: "RA201102801048", numbers: numbersArray, alphabets: alphabetsArray, highest_alphabet: highest_alphabet })
})




app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 })
})

var server_port = process.env.YOUR_PORT || process.env.PORT || 8000;
var server_host = process.env.YOUR_HOST || '0.0.0.0';

app.listen(server_port, () => console.log(`Listening on port ${server_port}`))