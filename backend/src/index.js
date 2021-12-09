// Exporto los modulos que instale que son los siguientes : Express , jWT.
const express = require('express');
const cors = require('cors');
const app = express();
// Requiero el archivo database que almacena la conexion de Mongo.
require('./database');

// Configuracion del Puerto
app.set('port', process.env.PORT || 4000)

// middlewares
app.use(express.json()); //Utilizo express el metodo json , convierte los datos del servidor en un formato js.
app.use(cors()); //Utilizo Cors para que agregue cabezeras , es decir para facililitar la interaccion entre este servidor y el servidor frontend.

// routes 
//Todas las rutas comienzan con /api.
app.use('/api', require('./routes/index'));

app.listen(app.get('port'));
console.log('Server on port', app.get('port'));
