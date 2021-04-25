const { allUsers } = require('../fixtures/testUsers');
const userModel = require('../../src/models/user.model');

const seedDBWithTestUsers = async () => {
  let addedUserDetails = await userModel.insertMany(allUsers);
  return addedUserDetails;
};

module.exports = { seedDBWithTestUsers };
