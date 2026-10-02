const express = require('express');
const app = express();
const PORT = 5000;
app.get('/api/datos', (req, res) => {
 res.json({
 mensaje: "¡Datos enviados con éxito desde el Microservicio de Backend!",
 servidor: "Contenedor NodeJS - API"
 });
});
app.listen(PORT, () => console.log(`Backend corriendo en puerto ${PORT}`));