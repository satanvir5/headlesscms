const express = require('express');
const router = express.Router();
const contentTypeController = require('../controller/contentTypeController');

router.post('/', contentTypeController.create);
router.put('/:id', contentTypeController.update);
router.delete('/:id', contentTypeController.deleteContent);
router.get('/', contentTypeController.getAll);

module.exports = router;
