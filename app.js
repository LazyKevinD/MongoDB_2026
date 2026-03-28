const express    = require('express');
const bodyParser = require('body-parser');
const path       = require('path');

const conectarDB     = require('./config/db');
const alumnoRoutes   = require('./routes/alumnoRoutes');

//const app  = express();
//const PORT = process.env.PORT || 3000;

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Servidor funcionando 🚀');
});

// Middlewares
app.use(bodyParser.json());
app.use(express.static(__dirname + '/views'));

// Conexión a la base de datos
conectarDB();

// Ruta principal → sirve el HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'alumnos.html'));
});

// Rutas de alumnos
app.use('/alumnos', alumnoRoutes);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto: ${PORT}`);
});