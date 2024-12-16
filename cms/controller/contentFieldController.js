const contentFieldService = require('../service/contentFieldService');

async function create(req, res) {
  try {
    const contentField = await contentFieldService.createContentField(req.body);
    res.status(201).json(contentField);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function update(req, res) {
  try {
    const contentField = await contentFieldService.updateContentField(req.params.id, req.body);
    res.json(contentField);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deleteContentField(req, res) {
  try {
    await contentFieldService.deleteContentField(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getAll(req, res) {
  try {
    const contentFields = await contentFieldService.getAllContentFields();
    res.json(contentFields);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { create, update, deleteContentField, getAll };
