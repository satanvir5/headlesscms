const ContentType = require('../model/contentType');

async function createContentType(data) {
  try {
    return await ContentType.create(data);
  } catch (error) {
    throw new Error('Error creating content type');
  }
}

async function updateContentType(id, data) {
  try {
    return await ContentType.update(data, { where: { id } });
  } catch (error) {
    throw new Error('Error updating content type');
  }
}

async function deleteContentType(id) {
  try {
    return await ContentType.destroy({ where: { id } });
  } catch (error) {
    throw new Error('Error deleting content type');
  }
}

async function getAllContentTypes() {
  try {
    return await ContentType.findAll();
  } catch (error) {
    throw new Error('Error fetching content types'+error);
  }
}

module.exports = { createContentType, updateContentType, deleteContentType, getAllContentTypes };
