let express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    request = require('request'),
    exportedDatabaseModule = require('./main');

let dataStructure = require('./main');

let parentLevelNode = dataStructure.parentLevelNode;
let currentStats = dataStructure.stats;

let currentNode = parentLevelNode;
let currentResults = parentLevelNode.dfs("");

// Body Parser config 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/currentNode", (req, res) => {
    res.send(currentNode);
});

app.get("/getCurrentResults", (req, res) => {
    res.send(currentResults);
})

app.post("/sendData", (req, res) => {
    // console.log(req.body.message.createtextP);
    var rs;
    for (var x in req.body.message) {
        if (req.body.message.hasOwnProperty(x)) {
            rs = x.split(",");
            console.log(rs[0]+","+rs[1]+","+rs[2]);
            // Value: propMap[x]
        }
    }
    let action = rs[0];
    //let text = JSON.parse(req.body);
    // console.log( Object.keys(req.body)[0]);
    // console.log(text);
    switch (action) {
        case 'create':
            let type = rs[1];
            let name = rs[2];
            // res.send(parentLevelNode);
            // add to database
            currentNode.addInnerNode(type, name, currentStats);
            // // carry out dfs and update
            currentResults = parentLevelNode.dfs("");
            // res.send(currentResults);
            // // render
            var options = {
                uri: 'http://localhost:3000/newData',
                method: 'POST',
                json: {
                    "message": currentResults
                }
            }
            request(options, function(error, response, body) {
                if(!error && response.statusCode === 200) {
                    res.send("Successfully added new data");
                }
            });
            break;

        case 'select':
            break;

        case 'modify':
            break;

        case 'publish':
            break;

        default:
            console.log("default");
    }
});

app.post("/random", (req, res) => {

});

app.listen(3001, () => {
    console.log("Receiving server listening on port 3001");
});