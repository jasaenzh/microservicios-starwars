const { Router } = require('express');
const controllers = require('../controllers')
const middlewares = require('../middleware')

const router = Router();

router.get('/', controllers.getCharacters);
router.post('/', middlewares.characterValidation, controllers.createCharacters);

module.exports = router;