const express = require('express');
const router = express.Router();
const contentFieldController = require('../controller/contentFieldController');

router.post('/', contentFieldController.create);
router.put('/:id', contentFieldController.update);
router.delete('/:id', contentFieldController.deleteContentField);
router.get('/', contentFieldController.getAll);

module.exports = router;
