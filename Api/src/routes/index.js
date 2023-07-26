const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const ordenes = require('./ordenes');
const items = require('./items')
const clients = require('./clients')
//const activities = require('./activities');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/ordenes', ordenes);
router.use('/items', items)
router.use('/clients', clients)
//router.use('/activity', activities);

module.exports = router;