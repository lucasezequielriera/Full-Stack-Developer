var http = require("http");
let fs = require('fs');

var server = http.createServer(function (peticion, respuesta) {

	fs.readFile('./hola_mundo.txt', 'utf-8', function (err, data) {
		if(err) {
			console.log('error: ', err);
		} else {
			respuesta.end(data);
		}
	});
	console.log("ya");
});

server.listen(3000, function() {
	console.log(`tu servidor está listo en ${this.address().port}`);
});