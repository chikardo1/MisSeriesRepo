const { Router } = require('express'); //Requiero express ,su funcion router
const router = Router();
//Importo el modelo del usuario para interacturar con la base de datos.
const User = require('../models/User');

const jwt = require('jsonwebtoken');
//Cuando visiten la ruta principal , para testear que esta funcionando , va a mostrar en pantalla hellp.
router.get('/', (req, res) => { 
    res.send('hello')
});

router.post('/signup', async (req, res) => {
    const { nombre,apellido,email, password } = req.body; //guardo en una constante de req body nombre...
    const newUser = new User({nombre, apellido, email, password});
    await newUser.save();
		const token = await jwt.sign({_id: newUser._id}, 'secretkey');// Guardo el id del nuevo usuario.
    res.status(200).json({token});//Devuelve el token.
});

router.post('/signin', async (req, res) => {
    const { nombre,apellido,email, password } = req.body; //""

    const user = await User.findOne({email}); //utlizo findone para ver si el email se encunetra en la base de datos.
    if (!user) return res.status(401).send('el email no existe');
    if (user.password !== password) return res.status(401).send('Contraseña Incorrecta');

		const token = jwt.sign({_id: user._id}, 'secretkey'); //si encuentra el id del usuario le entrega el token.

    return res.status(200).json({token}); //muestra el token.
});

router.get('/tasks', (req, res) => { //Ruta de inicio.
    
});

router.get('/private-tasks', verifyToken, (req, res) => {//Ruta de inicio del usuario autenticado.
    
});

async function verifyToken(req, res, next) { //Verificacion del Token
	try {
		if (!req.headers.authorization) {
			return res.status(401).send('Solicitud no autorizada.');
		}
		let token = req.headers.authorization.split(' ')[1];
		if (token === 'null') {
			return res.status(401).send('Solicitud no autorizada.');
		}

		const payload = await jwt.verify(token, 'secretkey');
		if (!payload) {
			return res.status(401).send('Solicitud no autorizada.');
		}
		req.userId = payload._id;
		next();
	} catch(e) {
		//console.log(e)
		return res.status(401).send('Solicitud no autorizada.');
	}
}

module.exports = router; //exporto el modulo router .
