const Sequelize = require('sequelize')
const db = require('../db')
const {User} = require('./index')

const Post = db.define('post', {
  title: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT,
    require: true
  }, type: {
    type: Sequelize.ENUM('blog', 'bit', 'image', 'sounds', 'chat')
  }, status: {
    type: Sequelize.ENUM('saved', 'posted')
  },
  likes: {
    type: Sequelize.INTEGER
  }
})


module.exports = Post;

Post.submitPost = (post) => {
  return User.findById(post.userId)
  .then(result => result.addPost(post))
}

// Post.getFeed(userId) {
//   User.findById(userId, {include:
//   {model: following}})
//   .then(user => followList: user.following)
// }
