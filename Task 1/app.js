const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));



// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Route to serve the form
app.get('/', (req, res) => {
    res.render('index');
});

// Route to handle form submission
app.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    res.render('result', { name: name, email: email });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});