const router = require('express').Router()
const {User, PrivateMessages} = require('../db/models')
const Op = require('sequelize').Op

router.get(`/`, (req, res, next) => {
  PrivateMessages.findAll({
    where: {
      [Op.or]: [
        {senderId: req.user.id},
        {recipientId: req.user.id}
      ]
    }
  })
  .then(messages => res.json(messages))
  .catch(next)
})

module.exports = router

