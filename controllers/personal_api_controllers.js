var express = require('express'),
    app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var db = require('../models');







// module.exports = {
//   homepage: homepage,
//   profilePage: profilePage,
  
// };