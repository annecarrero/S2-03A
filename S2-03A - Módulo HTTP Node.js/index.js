var http = require('http');
var dt = require('./agendamento');
var dt1 = require('./cadastro');
var dt2 = require('./login');
var dt3 = require('./paginainicial');
var dt4 = require('./paginadomedico');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("data e hora:" + dt.myDateTime() + "<br>" );
  res.write("cadastro:" + dt1.myDateTime() + "<br>" );
  res.write("login:" + dt2.myDateTime() + "<br>" );
  res.write("home:" + dt3.myDateTime() + "<br>" );
 res.write ("medico" + dt4.myDateTime() + "<br>" );

  res.end();
}).listen(5013);
