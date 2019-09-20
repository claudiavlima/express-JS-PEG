const board = require('./board.json');
const express = require('express'); //const porque no se reasigna express ni app
const app = express(); //agarra la libreria express y la ejecuta, 
//levanta una instancia de la clase express y retorna un objeto que guardo en la variable app
const port = 3000;

//estatico
app.use(express.static('public/peg_solitaire')); //la carpeta public es para servir archivos estaticos
//lo de public se devuelve tal cual esta

//dinamico
app.get('/newboard', (req, res) => { //es la url para el navegador, es mi endpoint (get+rute)
    res.send(board); 
  });

app.listen(port,  () => {  //listen: todo lo configurado antes, ahora se puede empezar a prcesar levantando el seervicio en cierto puerto
  console.log(`Example app listening on port ${port}`); //van comillas invertidas, al lado de la p, apretar 2 veces
});