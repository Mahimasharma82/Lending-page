const express = require('express');
const app = express();
const port = 3000;


app.set('view engine', 'ejs');


app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('index');
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log("Contact Form Submitted:", { name, email, message });
  res.send(`<h2>Thanks ${name}, we received your message!</h2><a href="/">Go Back</a>`);
});

app.get('/search', (req, res) => {
  const location = req.query.location || req.query.city || req.query.q;
  res.send(`<h2>Search Results for "${location}" will appear here.</h2><a href="/">Back</a>`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

