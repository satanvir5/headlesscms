// const Content = require('../model/content');
// const { Content, ContentType, ContentField, Field } = require('../model');
const Content = require('../model/content');
const ContentType = require('../model/contentType');
const ContentField = require('../model/contentField');
const Field = require('../model/field');

async function createContent(data) {
  try {
    return await Content.create(data);
  } catch (error) {
    throw new Error('Error creating content');
  }
}

async function updateContent(id, data) {
  try {
    return await Content.update(data, { where: { id } });
  } catch (error) {
    throw new Error('Error updating content');
  }
}

async function deleteContent(id) {
  try {
    return await Content.destroy({ where: { id } });
  } catch (error) {
    throw new Error('Error deleting content');
  }
}

async function getAllContent() {
  try {
    return await Content.findAll();
  } catch (error) {
    throw new Error('Error fetching content'+ error);
  }
}


// async function getAllContent1() {
//     try {
//       // Fetch content with its related data using Sequelize's include
//       const contents = await Content.findAll({
//         include: [
//           {
//             model: ContentType, // Include ContentType
//             as: 'contentType', // The alias used in the association
//             attributes: ['id', 'name', 'slug', 'description'], // You can choose which fields to include
//           },
//           {
//             model: ContentField, // Include ContentField
//             as: 'contentFields', // The alias used in the association
//             include: [
//               {
//                 model: Field, // Include related Field data
//                 as: 'field', // The alias used in the association
//                 attributes: ['id', 'name', 'field_type'], // You can choose which fields to include
//               }
//             ]
//           }
//         ]
//       });
  
//       return contents;
//     } catch (error) {
//       throw new Error('Error fetching content with related data' + error);
//     }
//   }

module.exports = { createContent, updateContent, deleteContent, getAllContent };
