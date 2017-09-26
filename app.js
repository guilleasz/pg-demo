const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');

const app = express();

// templating boilerplate setup
app.engine('html', nunjucks.render); // como renderear templates html
app.set('view engine', 'html'); // que extensiones de archivo tienen los templates
nunjucks.configure('views', { noCache: true }); // donde encontrar las views


app.use(bodyParser.urlencoded({ extended: true })); // para HTML form submits
app.use(bodyParser.json()); // seria para AJAX requests


const users = [
  {
    name: 'Guille',
    email: 'guille@plataforma5.la',
    id: 1,
  }, {
    name: 'Toni',
    email: 'toni@plataforma5.la',
    id: 2,
  }, {
    name: 'Facu',
    email: 'facu@plataforma5.la',
    id: 3,
  }, {
    name: 'Santi',
    email: 'santi@plataforma5.la',
    id: 4,
  },
];

app.get('/users', (req, res) => {
  res.render('index', { users });
});

app.get('/users/:id', (req, res) => {
  res.render('index', { users: users.filter(user => user.id === Number(req.params.id)) });
});


app.listen(3000);
