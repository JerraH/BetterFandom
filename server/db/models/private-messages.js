const Sequelize = require('sequelize')
const db = require('../db')
const {Channel} = require('./index')

const PrivateMessage = db.define('privateMessage', {
  content: {
    type: Sequelize.TEXT
  }
})


module.exports = PrivateMessage;
