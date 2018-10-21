let express = require('express'),
    bodyParser = require('body-parser'),
    message = require('./message'),
    app = express();

// CORS functionality
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
  
    // Request methods you wish to allow
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
    // Request headers you wish to allow
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
    // // Set to true if you need the website to include cookies in the requests sent
    // // to the API (e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials', true);
  
    // Pass to next layer of middleware
    next();
  });

// Body Parser config 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", () => {
    console.log("Working");
});

app.get("/getMessage", (req, res) => {
    res.send(message.messages[0].message);
});

app.post("/newData", (req, res) => {
    let newData = req.body.message;
    message.messages[0].setMessage(newData);
    res.send("Successfully added new Data");
});

app.listen(3000, () => {
    console.log("Listening to native server on port 3000");
});