const morgan = require('morgan');
const express = require('express')
const cors = require('cors');
const app = express()
const PORT = '3001'


app.use(morgan('dev'));
app.use(cors())


app.get('/iecho', function (req, res) {
    const texto = req.query.text;
    if (!texto) return res.status(400).send({"error": "No Text"})
    const newTexto = texto.split('').reverse().join('');
    let respuesta = {
        "text": newTexto,
        "palindrome": texto === newTexto
    };
    res.status(200).send(respuesta)
})

app.listen(PORT,()=>{
    console.log(`%%Servidor escuchando en el puerto ${PORT}`)
})
module.exports = app;