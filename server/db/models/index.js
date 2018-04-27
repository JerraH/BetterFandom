const User = require('./user')
const Post = require('./post')
const Comment = require('./comment')
const Tag = require('./tag')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

User.belongsToMany(User, {through: 'Following', as: 'Follower'})

User.hasMany(Post)

User.hasMany(Comment);

Post.hasMany(Tag);

Post.belongsToMany(Comment, {through: 'CommentThread'})
Comment.hasOne(Post);
// User.belongsToMany(User, {through: 'Following', as: 'Follow'})




/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Post,
  Comment
}
