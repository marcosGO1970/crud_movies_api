const express = require('express');
const router = express.Router();

const genresController = require('../../controllers/api/genresController');
console.log("Pase x el genresRoutes de la API");
router.get('/', genresController.list);
router.get('/detail/:id', genresController.detail);


module.exports = router;