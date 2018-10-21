var express = require ("express");
var app = express();
var bodyParser = require("body-parser");
var request = require('request');
app.use (bodyParser.urlencoded({extended: true}));

app.set ("view engine", "ejs")
const {Wit, log} = require('node-wit');

const client = new Wit({
  accessToken: 'RSNL2TFCK47R4QOS6NHWHFLTUSJYLHEI',
  logger: new log.Logger(log.DEBUG) // optional     
});


app.get("/", function(req, res){	
    res.render("home");
});

app.post("/", function(req, res){
    var inputVoice = req;
    var outPutMessage ;
    console.log(req.body);
    var options = {
        uri: 'http://localhost:3001/sendData',
        method: 'POST',
        json: {
            "message": req.body
        }
    }
    request(options, function(error, response, body) {
        if(!error && response.statusCode === 200) {
            res.send("Successfully added new data");
        }
    });
    console.log('change');
    res.render("home");
});

app.listen(4000, function(){
    console.log ("voice to speech has been started!!!");
});