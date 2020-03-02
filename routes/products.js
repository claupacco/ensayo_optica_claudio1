var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController')

router.get('/', productsController.products) //Pagina de todos los productos

router.get('/create', productsController.createForm) //Pagina de formulario de creacion de producto
router.post('/create', productsController.create) //Guardado de producto

router.get('/:idProducto', productsController.productDetail) //Pagina de cada producto 

router.get('/edit/:idProducto', productsController.edit) //Pagina de formulario de edicion
router.put('/edit/:idProducto', productsController.update) //Pagina de almacenamiento de edicion

router.delete('/delete/:idProducto', (req, res) => {
    res.redirect('delete')
})


module.exports = router;