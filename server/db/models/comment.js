const Sequelize = require('sequelize')
const db = require('../db')

const Comment = db.define('comment', {
  content: {
    type: Sequelize.TEXT
  }
})

module.exports = Comment
