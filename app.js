//Require de express
const express = require('express');
//Requiere de path
const path = require('path');
//Ejecución de express
const app = express();

const publicPath = path.resolve(__dirname, './public');
//Usando recursos estáticos
app.use(express.static(publicPath))

//Inicio el servidor
app.listen(process.env.PORT || 3000,() => {
    console.log('Servidor corriendo en el puerto 3000')
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.get('/registro', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/ingreso', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});




