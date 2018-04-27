const Sequelize = require('sequelize')
const db = require('../db')

const Post = db.define('post', {
  title: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT
  }, type: {
    type: Sequelize.ENUM('blog', 'bit', 'image', 'sounds', 'chat')
  }, status: {
    type: Sequelize.ENUM('saved', 'posted')
  }
})


module.exports = Post;
