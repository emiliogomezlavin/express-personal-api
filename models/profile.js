var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


var PetsSchema = new Schema ({
    name: String,
    type: String,
    breed: String
});

var DrinksSchema = new Schema ({
  name: String,
  origin: String,
  cocktail: String
});

var ProfileSchema = new Schema({
  name: String,
  linkedin_link: String,
  github_link: String,
  current_city: String,
  pets: [PetsSchema],
  favorite_drinks: [DrinksSchema]
});

var Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;



