var express = require ('express');
var bodyParser = require('body-parser');
var path = require('path');

/*initialize a variable and set it to use the express function */
var app = express();

/*Set the port*/
var port = 3000;

/*Setting up the middlewear (this needs to be done before the router handler)*/
var logger = function(req, res, next){
    console.log('Logging.........');
    //Call the next piece of middlewear
    next();
}
//app.use needs to be called to use the middlewear
app.use(logger);

// Body-Parser Middlewear
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Setup the Middlewear for the Static folder like css/jquery
app.use(express.static(path.join(__dirname, 'public')));


/*setting up the route so we can get to a page */
app.get('/', function(req, res){
    res.send('Hello World');
});

/* set the app to listen on port 3000.*/ 
app.listen(port, function(){
console.log('Server started on port ' + port + '.........' );
})
