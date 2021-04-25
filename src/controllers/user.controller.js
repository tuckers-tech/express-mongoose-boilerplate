const userModel = require('../models/user.model');

module.exports.create = async (user) => {
  if (!user) throw new Error('Missing user');

  await userModel.create(user);
};

async function getAllUsers() {
  const users = await userModel.find();
  return users;
}

module.exports = {
  getAllUsers,
};
