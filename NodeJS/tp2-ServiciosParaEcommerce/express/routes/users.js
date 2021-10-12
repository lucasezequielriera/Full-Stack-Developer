var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Estos son los usuarios');
});

router.post('/', function(req, res, next) {
  // Insertar en base de datos //
  console.log(req.body); //Recibir lo enviado en el body del request //
  res.json(req.body);
})

router.put('/:id', function(req, res, next) {
  // Insertar en la base de datos //
  console.log(req.params.id); // Parametros por url //
  console.log(req.body); // Recibir lo enviado en el bod del request //
  res.json(req.body);
})

router.delete('/:id', function(req, res, next) {
  console.log(req.params.id); // Parametros por url //
  res.json(req.body);
})

module.exports = router;
