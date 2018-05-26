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
    }, {model: Comment}]
  })
  )
  .then(blogFeed => res.json(blogFeed))
    .catch(next)
  })

router.get('/bits', (req, res, next) => {
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
      type: 'bit'
    },
    include: [{
      model: User
    }, {model: Comment}]
  })
  )
  .then(blogFeed => res.json(blogFeed))
    .catch(next)
  })

  router.post('/', (req, res, next) => {
    Post.create(req.body)
    .then(post => res.json(post))
    .catch(next)
  })


module.exports = router;
