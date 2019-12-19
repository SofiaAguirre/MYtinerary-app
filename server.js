const express = require('express');
// Set up express routes
const app = express();
const bodyParser = require('body-parser');
require ('dotenv').config()
require ('./src/database');
const cors = require('cors')

app.use(cors());
app.use (express.static('client'));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hello World!');
})
// Initialize routes
app.use('/api', require('./routes/api'));
app.use('/itinerary', require ('./routes/ItineraryRoutes'));
app.use('/users', require ('./routes/userRoutes'));
app.use('/comment', require ('./routes/commentsRoutes'));
app.use('/favourite', require ('./routes/favouriteRoutes'));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on the best port ${port} !!`));
