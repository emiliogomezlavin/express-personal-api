var mongoose = require("mongoose");
mongoose.connect( process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL ||
                  "mongodb://localhost/personal-api");

module.exports.Artist = require("./artists.js");
module.exports.Profile = require("./profile.js");
