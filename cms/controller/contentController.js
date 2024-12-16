const contentService = require('../service/contentService');

async function create(req, res) {
  try {
    const content = await contentService.createContent(req.body);
    res.status(201).json(content);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function update(req, res) {
  try {
    const content = await contentService.updateContent(req.params.id, req.body);
    res.json(content);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deleteContent(req, res) {
  try {
    await contentService.deleteContent(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getAll(req, res) {
  try {
    const contents = await contentService.getAllContent();
    res.json(contents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}



module.exports = { create, update, deleteContent, getAll };
