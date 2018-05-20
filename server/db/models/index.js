const User = require('./user')
const Post = require('./post')
const Comment = require('./comment')
const Tag = require('./tag')
const PrivateMessage = require('./private-messages')
const UserProfile = require('./user-profile')
const Flag = require('./flag')
const Channel = require('./channel')
const PublicMessage = require('./public-messages')
// const Following = require('../index').Following
const Op = require('sequelize').Op
const db = require('../db')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

const Following = User.belongsToMany(User, {through: 'Following', as: 'Follower'})

User.belongsToMany(User, {through: 'BlockList', as: 'BlockedUser'})

User.hasMany(Post)

PrivateMessage.belongsTo(User, {as: 'sender'})
// PrivateMessage.belongsTo(User, {as: 'recipient'})

PublicMessage.belongsTo(User, {as: 'sender'})
PublicMessage.belongsTo(User, {as: 'recipient'})

PrivateMessage.belongsTo(Channel)
Channel.belongsToMany(User, {through: 'participants'})
User.belongsToMany(Channel, {through: 'participants'})
Channel.hasMany(PrivateMessage)

User.hasMany(Post)
Post.belongsTo(User)


User.hasMany(Comment);

Post.hasMany(Tag);
Tag.belongsToMany(Post, {through: 'TaggedAs'});

Post.belongsToMany(Comment, {through: 'CommentThread'})
Comment.hasOne(Post);

User.belongsTo(UserProfile);
UserProfile.hasOne(User)

User.hasMany(Flag)
Flag.belongsTo(User, {as: 'FlaggedUser'})
Flag.belongsTo(User, {as: 'Reporter'})
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
  Comment,
  PrivateMessage,
  UserProfile,
  Flag,
  Channel,
  PublicMessage,
  Following
}


// User.getFeed = function(user) {
//  User.findAll(
//     {include: [{model: Following, where: {FollowerId: user.id}}]
//   })
//   .then(followingUsers => {console.log(followingUsers)
//     return followingUsers})
//   .then(followingUsers => Post.findAll({
//     where: {
//       userId: {
//         [Op.contained]: followingUsers
//       },
//       include: [
//         {
//        model: Comment
//       }
//   ]
//     }
//   }))
// }
// // include: [
//   {
//     model: db.posts,
//
//   }
// ]

