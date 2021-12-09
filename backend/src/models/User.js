//Requiero dos cosas que vienen de moongose que son el Schema y el model.
const { Schema, model } = require('mongoose');
//Defino mi Schema y defino que tipos de datos van a ser guardados en mi base de datos.
const userSchema = new Schema({
    nombre: String,
    apellido: String,
    email: String,
    password: String
}, {
    timestamps: true //Guarda la fecha en la que fue creado el usuario.
});
//exporto el module y defino que mi schema va a estar dentro de la tabla users.
module.exports = model('User', userSchema, 'users');
