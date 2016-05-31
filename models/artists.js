var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ArtistSchema = new Schema({
  name: String,
  country: String,
  years: String,
  genres: [ String ],
  top_songs: [ String ],
  on_tour: Boolean
});

var Artist = mongoose.model('Artist', ArtistSchema);

module.exports = Artist;


