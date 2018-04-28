const Sequelize = require("sequelize");
const db = require("../db");

const Flag = db.define('flag', {
  type: {
    type: Sequelize.ENUM('harassment', 'incitement to violence', 'racism')
  },
  comment: {
    type: Sequelize.TEXT,
    validate: {
      isAlphanumeric: true
    }
  }

})

module.exports = Flag;


