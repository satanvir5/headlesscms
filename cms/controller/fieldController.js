const fieldService = require('../service/fieldService');

async function create(req, res) {
  try {
    const field = await fieldService.createField(req.body);
    res.status(201).json(field);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function update(req, res) {
  try {
    const field = await fieldService.updateField(req.params.id, req.body);
    res.json(field);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deleteField(req, res) {
  try {
    await fieldService.deleteField(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getAll(req, res) {
  try {
    const fields = await fieldService.getAllFields();
    res.json(fields);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { create, update, deleteField, getAll };
