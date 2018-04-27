const Sequelize = require('sequelize')
const db = require('../db')

const Tag = db.define('tag', {
  name: {
    type: Sequelize.STRING
  },
  count: {
    type: Sequelize.INTEGER
  }

})

module.exports = Tag;
