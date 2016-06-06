var express= require('express');
var app = express();
var PORT = 3001;
/*app.get('/' , function(req , res) {
	res.send('Hello Kumuda!');
});*/

var middleware = {
	requireAuthentication : function(req , res , next) {
		console.log('private route hit');
		next();
	},
	logger : function (req ,res , next) {
		console.log('request : '+ new Date().toString() +' '+req.method + " " + req.originalUrl);
		next();
	}
}

app.use(middleware.logger);
//app.use(middleware.requireAuthentication);

app.get('/about' ,middleware.requireAuthentication, function(req , res) {
	res.send('About Us! .....');
});

app.use(express.static(__dirname + '/public'));

//console.log(__dirname);

app.listen(PORT , function() {
	console.log('Server Started at port ' + PORT);
}); 