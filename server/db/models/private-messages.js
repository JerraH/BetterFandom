const Sequelize = require('sequelize')
const db = require('../db')

const PrivateMessage = db.define('privateMessage', {
  content: {
    type: Sequelize.TEXT
  }
})


module.exports = PrivateMessage;
