const { Router } = require('express');
const { Item, Orden } = require('../db');

const router = Router();

router.get('/', async (req, res) => {
    const { title } = req.query
    const allItems = await Item.findAll({ 
        include: Orden 
    })
    if(title){
    //filtro para el front que trae todas las actividades
    const filterA = await allItems.filter(e => e.title.toLowerCase().startsWith(e.title.toLowerCase()))
    byItems.length?
        res.json(byItems) :
        res.items(404).send({ 'msg': 'Not found' })
    }else {
        res.json(allItems)
    }
});

router.post('/', async (req, res, next) => {
    const {
        title,
        description,
        url,
        price,
        quantity,
    } = req.body;

    try {
        
        let item = await Item.create({ title, description, url, price, quantity }) 

        let itemWithOrden = await Item.findOne({
            where: { title },
            attributes: {
                exclude: ['updatedAt', 'createdAt'],
            },
          
        })
        res.json(itemWithOrden)
    } catch (error) {
        next(error)
    }

});

router.put('/:id', async (req, res, next) => {
    const { id } = req.params;
    const {
        title,
        description,
        url,
        price,
        quantity,
    } = req.body;
    try {
        let item = await Item.update({ 
            title,
            description,
            url,
            price,
            quantity,
        }, {
            where: { id }
        })
        res.json(item)
    } catch (error) {
        next(error)
    }
});



router.delete('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        let item = await Item.destroy({
            where: { id }
        })
        res.json(item)
    } catch (error) {
        next(error)
    }
});


module.exports = router;