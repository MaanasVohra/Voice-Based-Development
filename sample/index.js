var express = require ("express");
var app = express();
var bodyParser = require("body-parser");

// CORS functionality
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

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
    console.log('change');
    res.render("home");
});

app.listen(5000, function(){
    console.log ("voice to speech has been started!!!");
});