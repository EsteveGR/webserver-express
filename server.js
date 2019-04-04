const express = require('express')
const app = express()

const hbs = require('hbs');

require('./hbs/helpers');
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'evetse',
    });
});

app.get('/about', (req, res) => {
    res.render('about', {});
});


// app.get('/', (req, res) => {
//     //res.send('Hello World');
//     let salida = {
//         nombre: 'fernando',
//         edad: 32,
//         url: req.url
//     };
//     res.send(salida);

// })

// app.get('/data', (req, res) => {
//     res.send('Hello Data');

// })


app.listen(port, () => {
    console.log(`Listen port ${port} ...`);
})