const contentTypeService = require('../service/contentTypeService');

async function create(req, res) {
  try {
    const contentType = await contentTypeService.createContentType(req.body);
    res.status(201).json(contentType);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function update(req, res) {
  try {
    const contentType = await contentTypeService.updateContentType(req.params.id, req.body);
    res.json(contentType);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deleteContent(req, res) {
  try {
    await contentTypeService.deleteContentType(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getAll(req, res) {
  try {
    const contentTypes = await contentTypeService.getAllContentTypes();
    res.json(contentTypes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { create, update, deleteContent, getAll };
