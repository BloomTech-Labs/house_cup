const {
  addSchool,
  getAllSchools,
} = require('../controllers/SchoolController');

const { authenticate } = require('../../common/common');

module.exports = (server) => {
  server.route('/api/schools').post(addSchool);
  server.route('/api/schools').get(getAllSchools);
};
