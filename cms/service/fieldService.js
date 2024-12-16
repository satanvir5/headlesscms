const Field = require('../model/field');

async function createField(data) {
  try {
    return await Field.create(data);
  } catch (error) {
    throw new Error('Error creating field');
  }
}

async function updateField(id, data) {
  try {
    return await Field.update(data, { where: { id } });
  } catch (error) {
    throw new Error('Error updating field');
  }
}

async function deleteField(id) {
  try {
    return await Field.destroy({ where: { id } });
  } catch (error) {
    throw new Error('Error deleting field');
  }
}

async function getAllFields() {
  try {
    return await Field.findAll();
  } catch (error) {
    throw new Error('Error fetching fields');
  }
}

module.exports = { createField, updateField, deleteField, getAllFields };
