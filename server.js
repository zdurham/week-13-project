// Dependencies
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
let apiRoutes = require('./app/routing/apiRoutes.js')
let htmlRoutes = require('./app/routing/htmlRoutes.js')

const app = express()
let PORT = process.env.PORT || 3000

// Setting up body parser
//======================================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Routing
//======================================================================
apiRoutes(app)
htmlRoutes(app)


// Server Listener
//======================================================================
app.listen(PORT, function() {
  console.log("App is listening on PORT: " + PORT)
})
