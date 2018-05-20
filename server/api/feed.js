const router = require('express').Router()
const {User, Post, Comment} = require('../db/models')
const db = require('../db')
const Op = require('sequelize').Op
const Sequelize = require('sequelize')

router.get('/blocks', (req, res, next) => {
  console.log(db.models.Following)
  let Following = db.models.Following
  return Following.findAll({
  where: {
    FollowerId: req.user.id,
  }, attributes: ['userId']})
  .then(users => users.map(user => user.userId))
  .then(following => Post.findAll({
     where: {
      userId: {
        [Op.or]: following
      },
      type: 'blog'
    },
    include: [{
      model: User
    }]
  })
  )
  .then(blogFeed => res.json(blogFeed))
    .catch(next)
  })


module.exports = router;
