var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request,response){
	//A constante __dirname retorna o diretório rais da aplicação
	fs.readFile(__dirname + '/index.html', function(err, retorno){
		response.writeHeader(200, {'Content-Type':'text/html'});
		response.write(retorno);
		response.end();
	});
});

server.listen(3000, function(){
	console.log('Executando o Site Pessoal');
});