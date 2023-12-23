/*const http = require('http');
const fs = require ('fs');
const {direname} = require ('path');




const server = http.createServer( (req, res) => {

    const file = fs.readFileSync(__dirname + '../../pages/index.html');

    //console.log(__dirname)

    res.writeHead(200, {
        'Content-Type':'text/html; charset=UTF-8'});
    res.end(file);
    });
server.listen(3500, ( )=> console.log('Servidor corriendo en puerto http://localhost:3500')); */

const express = require('express');
//const home = require('/src/router/home.js');

const path = require ('path');
const fs = require ('fs');


const app = express();
const port = 500; 

app.get('/', (req, res) => {
    res.send('Hola mundo! enviado desde ruta ');
})


app.get('/home', (req, res) => { 
    res.send ('Hola estas el sitio de home')
})



app.listen(port, () => { console.log(`El servidor esta corriendo en el http://localhost:${port}`)})
