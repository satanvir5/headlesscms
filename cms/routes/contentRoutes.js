const express = require('express');
const router = express.Router();
const contentController = require('../controller/contentController');

router.post('/', contentController.create);
router.put('/:id', contentController.update);
router.delete('/:id', contentController.deleteContent);
router.get('/', contentController.getAll);

module.exports = router;
