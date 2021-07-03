const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: String,
  },
  {
    collection: 'Users',
    optimisticConcurrency: true,
  },
);

module.exports = mongoose.model('User', userSchema);
