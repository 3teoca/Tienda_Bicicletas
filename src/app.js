const express = require("express");
const { dirname } = require("path");
const path = require ("path");
const { env } = require("process");

const app = express ();


const port = process.env.port || 3000;

app.listen(port,()=> (
    console.log("Servidor escuchando en el puerto http://localhost:" + port)
));
app.use(express.static("public"));
    
app.get ("/", (req,res) => {
<<<<<<< HEAD
    res.sendFile(path.join(__dirname, "/views/catalogo.html"));
=======
    res.sendFile(path.join(__dirname, "/views/home.html"));
});
>>>>>>> e404853f8b3b4e921044544525ff6d35d8fac75a

app.get ("/registro", (req,res) => {
    res.sendFile(path.join(__dirname, "/views/registro.html"));
});

app.get ("/contacto", (req,res) => {
    res.sendFile(path.join(__dirname, "/views/contacto.html"));
});

app.get ("/catalogo", (req,res) => {
    res.sendFile(path.join(__dirname, "/views/catalogo.html"));
});