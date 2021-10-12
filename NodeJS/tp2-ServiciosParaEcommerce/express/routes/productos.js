var express = require('express');
const res = require('express/lib/response');
var router = express.Router();

const productosController = require("../controllers/productosController");

/* GET home page. */
router.get('/', productosController.getAll);

router.get('/:id', productosController.getById);

router.post('/', productosController.create)

router.put('/:id', productosController.update)

router.delete('/:id', productosController.delete)

module.exports = router;
