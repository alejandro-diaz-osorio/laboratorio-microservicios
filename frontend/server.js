const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', async (req, res) => {
    try {
        // Docker permite usar el nombre del servicio "mi-backend"
        // como DNS interno.
        const respuesta = await fetch('http://mi-backend:5000/api/datos');
        const datos = await respuesta.json();

        res.send(`
            <h1>🚀 Microservicio Frontend Activo</h1>
            <p>Hemos consultado al servicio de Backend de manera aislada y nos respondió:</p>
            <blockquote style="background: #f0f0f0; padding: 15px; border-left: 5px solid #007bff;">
                <b>${datos.mensaje}</b>
                <br>
                <small>Origen: ${datos.servidor}</small>
            </blockquote>
        `);
    } catch (error) {
        res.send(`<h1>Error al conectar con el Backend</h1><p>${error.message}</p>`);
    }
});

app.listen(PORT, () => console.log(`Frontend corriendo en puerto ${PORT}`));
