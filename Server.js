const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 8080;

// ** MIDDLEWARE ** //  add ur app url to as a 3rd item in the below array
const whitelist = ['http://localhost:3000', 'http://localhost:8080'];
const corsOptions = {
    origin: function (origin, callback) {
        console.log("** Origin of request " + origin)
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            console.log("Origin acceptable")
            callback(null, true)
        } else {
            console.log("Origin rejected")
            callback(new Error('Not allowed by CORS'))
        }
    }
}
app.use(cors(corsOptions))


//  react's client-side build folder
app.use(express.static(path.join(__dirname, './client/build')));
// 
app.use(express.json());
//  index.html in the above folder
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
})

// require routes
require("./SendGridApi/apiRoute")(app);

app.listen(PORT, () => {
    console.log(`\n***\nApp running on port ${PORT}!\n***\n`);
});