const router = require('express').Router()
const {Comment, Post, User, UserProfile} = require('../db/models')
const db = require('../db')
const Sequelize = require('sequelize')


//get all comments on a post
router.get('/:postId', (req, res, next) => {
  Comment.findAll({
    where: {
      postId: req.params.postId
    }
  })
  .then(comments => res.json(comments))
  .catch(next)
})


//get comments made on posts you wrote
router.get('/:userId/notifications', (req, res, next) => {
  Comment.findAll({
    include: [{
      model: Post, where: {
        userId: req.params.userId
      }
    }]}
  )
  .then(comments => res.json(comments))
  .catch(next)
})

//get comments you have written

router.get('/:userId/commenthistory', (req, res, next) => {
  Comment.findAll({
    where: {
      userId: req.params.userId
    }
  })
  .then(comments => res.json(comments))
  .catch(next)
})

//write comment
router.post('/', (req, res, next) => {
  console.log(req.body)
  Comment.create(req.body)
  .then(comment => res.json(comment))
  .catch(next)

})

//edit comment

router.put('/:commentId', (req, res, next) => {
  Comment.update(req.params.commmentId)
// *
})

//delete comment
router.delete('/:commentId', (req, res, next) => {

})


//flag comment

//hide all comments by user

module.exports = router
