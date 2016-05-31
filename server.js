// require express and other modules
var express = require('express'),
    app = express();


// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

/************
 * DATABASE *
 ************/

var db = require('./models');
var controllers = require('./controllers/personal_api_controllers');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/profile', function profilePage (req, res) {
  res.sendFile(__dirname + '/views/profile.html');
});

app.get('/artists', function favoriteArtistsPage (req, res) {
  res.sendFile(__dirname + '/views/artists.html');
});

/*
 * JSON API Endpoints
 */
app.get('/api/profile', function getProfileInfo (req, res) {
  db.Profile.find({}, function (err, profile){
    if (err) { res.json("Error while loading!", err);}
    res.json(profile);
  });
});

app.get('/api/artists', function getArtistsInfo (req, res){
  db.Artist.find({}, function (err, artists){
    if (err) { res.json("Error while loading!", err);}
    res.json(artists);
  });
});

app.post('/api/artists', function createNewArtist (req, res){
  var artist = req.body;
  db.Artist.create(artist, function (err, newArtist){
    if (err) { res.json("Error while loading!", err);}
    res.json(newArtist);
  });
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
