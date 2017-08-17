// Dependencies
let path = require('path')

module.exports = function(app) {
  //Home route
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"))
  })
  
  // Survey route
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/survey.html"))
  })
  // Default option if no proper route is found
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"))
  })
}