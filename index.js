
// Modules and Globals
require('dotenv').config()
const express = require('express');
const methodOverride = require('method-override')
const app = express();
const PORT = process.env.PORT
const jsxEngine = require('express-react-views').createEngine();
const placesController = require('./controllers/places');

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine);
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))



// Controllers & Routes
app.use('/places', placesController)

app.get('/', (req, res) => {
    res.render('home')
});

app.get('*', (req, res) => {
    res.status(404).render('Error')
});

// Listen for Connections
app.listen(PORT, () => {
    console.log('FRANKEINSTEIN, ITS ALIVE!');
});



