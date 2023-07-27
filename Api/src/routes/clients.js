const { Router } = require('express');
const { Orden, Client } = require('../db');
const router = Router();

router.get('/', async (req, res) => {
    const { status } = req.query
    const allClients = await Client.findAll({
        include: Orden
    })

    if (status) {
        const byStatus = await allClients.filter(i => i.name.toLowerCase().startsWith(i.name.toLowerCase()))
        byName.length ?
            res.json(byName) :
            res.status(404).send({ 'msg': 'Not found' })
    } else {
        res.json(allClients)
    }
});

router.get('/:id', async (req, res, next) => {
    const id  = req.params.id;

    let clientes

    try {
        if (id.length > 1) {
            clientes = await Orden.findByPk(id, { include: Orden })
            clientes = {
                id: clientes.id,
                createdate: clientes.createdate,
                status: clientes.status,
                client: clientes.client,
                shippingaddress: clientes.shippingaddress,
                shippingpromise: clientes.shippingpromise,
                ordenes: clientes.ordenes.map((e) => {
                    return {
                        id: e.id,
                        createdate: e.createdate,
                        status: e.status,
                        client: e.client,
                        shippingaddress: e.shippingaddress,
                        shippingpromise: e.shippingpromise
                    }
                })
            }
        }
        res.json(clientes)
    } catch (error) {
        next(error)
    }
});

router.post('/', async (req, res, next) => {
    const {
        name,
        direction,
        url,
        phone,
        birthdate,
        ordenes
    } = req.body;
    
    try {
        let client = await Client.create({ name, direction, url, phone, birthdate })
        await client.setOrdens(ordenes)
    
        let clientWithOrden = await Client.findOne({
            where: { name: name },
            attributes: {
                    exclude: ['updatedAt', 'createdAt'],
            },
            include: {
                model: Orden,
                through: {
                    attributes: []
                }
            }
        })
        res.json(clientWithOrden)
    } catch (error) {
        next(error)
    }
});

router.delete('/:id', async(req, res, next) => {
    try{
        console.log("entro al delete")
        //let idOrden= parseInt(req.params.id);
        let resultDelete = await Client.destroy({where:{id : req.params.id}})
        if(!resultDelete){
            return res.status(404).send('No existe el cliente con el ID especifico')
        }else{
            return  res.status(201).send(`El cliente ${req.params.id} ha sido eliminada`)
        };
    }catch(err){
        next(err)
    }
});

module.exports = router;