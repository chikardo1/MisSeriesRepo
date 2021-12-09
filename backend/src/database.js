// Exporto el modulo para conectar mi database que es: Mongoose.
const mongoose = require('mongoose');
// Utilizo el metodo connect de mongoose que sirve para conectar en mi caso mi mongoatlas a mi sitio.
mongoose.connect('mongodb+srv://chikardo:4455322@cluster0.ygczp.mongodb.net/angular-auth?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));