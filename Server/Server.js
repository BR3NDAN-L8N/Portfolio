const express = require("express");
const App = express();
const Path = require("path");
const PORT = process.env.PORT || 8080;

//  react's client-side build folder
App.use(express.static(Path.join(__dirname, '../client/build')));
//  index.html in the above folder
App.get('/', function (req, res) {
    res.sendFile(Path.join(__dirname, '../client/build/index.html'));
})

// require routes
require("./SendGridApi/apiRoute")(App);

App.listen(PORT, () => {
    console.log(`\n***\nApp running on port ${PORT}!\n***\n`);
});