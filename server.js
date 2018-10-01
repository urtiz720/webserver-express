const express = require('express')
const app = express()
const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));

//Express HBS
hbs.registerPartials(__dirname + '/views/parciales'); //contenedor de todos los parciales
app.set('view engine', 'hbs');

require('./hbs/helpers')

const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    // res.send('Hola Mundo');
    // let salida = {
    //     nombre: 'Luis',
    //     edad: 22,
    //     url: req.url
    // }

    res.render('home', {
        nombre: 'luis'
    });
    // res.send(salida); // lo manda en formato JSON
})

app.get('/about', (req, res) => {
    res.render('about');
})


app.get('/data', (req, res) => {
    res.send('Hola Data');

})

app.listen(port, () => {
    console.log(`Escuchando puesto ${port}`);
});