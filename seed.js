// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

// Profile info seeded
// var profile = {
//     name: "Emilio Gomez Lavin",
//     linkedin_link: "https://linkedin.com/in/emiliogomezlavin",
//     github_link: "https://github.com/emiliogomezlavin",
//     current_city: "San Francisco",
//     pets: [ 
//       { name: 'Maika', type: 'dog', breed: 'Unkwon (adopted street dog)' },
//       { name: 'Lola', type:'dog', breed: 'Yorkshire Terrier' }
//     ],
//     favorite_drinks: [
//       { name: 'Tequila', origin: 'Jalisco, Mexico', cocktail: 'Paloma'},
//       { name: 'Gin', origin: 'Multiple origins', cocktail: 'Gin & Tonic'},
//       { name: 'Mezcal', origin: 'Oaxaca, Mexico', cocktail: 'Straight'},
//     ]
// };


// db.Profile.remove({}, function(err, albums){
//     db.Profile.create(profile, function(err, campsite){
//       if (err){ return console.log("Error:", err); }
//       console.log("Created favorite artists", profile);
//       process.exit(); // we're all done! Exit the program.
//     });
// });


var artists = [
  {
    name: 'The Beatles',
    country: 'UK',
    years: '1960 - 1970',
    genres: [ 'Rock', 'Pop'],
    top_songs: [ 'Hey Jude', 'Yesterday', 'Something', 'Get Back', 'All you need is Love'],
    on_tour: false
 },
 { 
    name: 'Queen',
    country: 'UK',
    years: '1970 - present',
    genres: [ 'Rock'],
    top_songs: [ 'Bohemian Raphsody', 'Under Pressure', 'Somebody To Love', "Don't stop me know", 'We will rock you'],
    on_tour: true
 },
 { 
    name: 'Michael Jackson',
    country: 'Indiana, USA',
    years: '1964 - 2009',
    genres: [ 'Pop', 'Soul', 'R&B', 'Funk', 'Rock', 'Dance-pop'],
    top_songs: [ 'Man in the Mirror', 'Smooth Criminal', 'Billie Jean', 'Black or White', 'Love never felt so good'],
    on_tour: false
 },
 { 
    name: 'Frank Sinatra',
    country: 'New Jersey, USA',
    years: '1941 - 1998',
    genres: [ 'Traditional pop', 'Jazz', 'Swing'],
    top_songs: [ 'Fly me to the moon', "I've got you under my skin", 'Come fly with me', 'My way', 'I left my heart in San Francisco'],
    on_tour: true
 }];


db.Artist.remove({}, function(err, albums){
    db.Artist.create(artists, function(err, campsite){
      if (err){ return console.log("Error:", err); }
      console.log("Created favorite artists", artists);
      process.exit(); // we're all done! Exit the program.
    });
});








