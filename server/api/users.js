const router = require('express').Router()
const {User, UserProfile} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'email']
  })
    .then(users => res.json(users))
    .catch(next)
})

router.get(`/:userId`, (req, res, next) => {
  User.findById(req.params.userId, {include:
    [{
    model: UserProfile
  }]})
  .then(user => res.json(user))
  .catch(next)
})
