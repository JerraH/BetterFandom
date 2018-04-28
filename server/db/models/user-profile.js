const Sequelize = require('sequelize');
const db = require('../db');

const UserProfile = db.define('userProfile', {
  filteredWords: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  flags: {
    type: Sequelize.INTEGER //this is only intended to hold the quantity
  },
  posts: {
    type: Sequelize.VIRTUAL //
  }

})

module.exports = UserProfile;


