const Sequelize = require('sequelize')
const db = require('../db')
// const {PrivateMessage} = require('./index')
// const {User} = require('./index')

const Channel = db.define('channel', {
  name: {
    type: Sequelize.TEXT
  }
})

module.exports = Channel
