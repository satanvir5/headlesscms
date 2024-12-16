const express = require('express');
const router = express.Router();
const fieldController = require('../controller/fieldController');

router.post('/', fieldController.create);
router.put('/:id', fieldController.update);
router.delete('/:id', fieldController.deleteField);
router.get('/', fieldController.getAll);

module.exports = router;
