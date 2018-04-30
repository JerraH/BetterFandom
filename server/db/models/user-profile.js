const Sequelize = require('sequelize');
const db = require('../db');

const UserProfile = db.define('userProfile', {
  filteredWords: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  postBlacklist: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  postGraylist: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  watchWords: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  userPermissions: {
    type: Sequelize.ENUM('0', '1', '2', '3'),
    defaultValue: '3'
  },
  flags: {
    type: Sequelize.INTEGER //this is only intended to hold the quantity
  },
  about: {
    type: Sequelize.TEXT
  },
  gender: {
    type: Sequelize.STRING
  },
  pronouns: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  }
  // posts: {
  //   type: Sequelize.VIRTUAL //
  // }

})

module.exports = UserProfile;


