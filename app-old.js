const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content': 'application/JSON' });

        let salida = {
            nombre: 'Luis UC',
            edad: 22,
            url: req.url
        }

        res.write(JSON.stringify(salida));

        // res.write('Hola Mundo');
        res.end();

    })
    .listen(8080);

console.log('Escuchando 8080');