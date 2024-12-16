const ContentField = require('../model/contentField');

async function createContentField(data) {
  try {
    return await ContentField.create(data);
  } catch (error) {
    throw new Error('Error creating content field');
  }
}

async function updateContentField(id, data) {
  try {
    return await ContentField.update(data, { where: { id } });
  } catch (error) {
    throw new Error('Error updating content field');
  }
}

async function deleteContentField(id) {
  try {
    return await ContentField.destroy({ where: { id } });
  } catch (error) {
    throw new Error('Error deleting content field');
  }
}

async function getAllContentFields() {
  try {
    return await ContentField.findAll();
  } catch (error) {
    throw new Error('Error fetching content fields');
  }
}

module.exports = { createContentField, updateContentField, deleteContentField, getAllContentFields };
