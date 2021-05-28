const express = require('express');
const app = express();
const {readFileSync} = require('fs');
const cors = require('cors');

app.use(
    cors({
        origin: "*"
    })
)

app.listen(process.env.PORT || 5000);


app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

app.get('/api/students/2021a', (req, res) => {
    let classA = JSON.parse(readFileSync('wep_2021_a.json'));
    res.send(classA);
})
app.get('/api/students/2021b', (req, res) => {
    let classB = JSON.parse(readFileSync('wep_2021_b.json'));
    res.send(classB);
})
app.get('/api/teachers', (req, res) => {
    let teachers = JSON.parse(readFileSync('wep_trainer.json'));
    res.send(teachers);
})

