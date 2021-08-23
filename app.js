require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT

//Handlebars
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//servir contenido estatico.
app.use( express.static('public'));

// app.get('/', (req, res) => {
//     res.render('home', {
//         nombre: 'Omar Barrios',
//         titulo: 'Web Server'
//     });
// })

// app.get('/generic', (req, res) => {
//     res.render('generic', {
//         nombre: 'Omar Barrios',
//         titulo: 'Web Server'
//     });
// })

// app.get('/elements', (req, res) => {
//     res.render('elements', {
//         nombre: 'Omar Barrios',
//         titulo: 'Web Server'
//     });
// })

app.get('*', (req, res) => {
  res.sendFile( __dirname + '/public/index.html');
})
 
app.listen( port, () => {
    console.log(`Web-server listening at http://localhost:${ port }`);
})