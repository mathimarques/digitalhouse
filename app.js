const express = require("express");
const path = require("path");

const app = express();

// Definir el path public como recurso de archivo estatico
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

// Arrancando el servidor
app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});

// Ruta raiz
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});
