const router = require('express').Router()
const {User, PrivateMessage, Channel, PublicMessage, db} = require('../db/models')
const Op = require('sequelize').Op
const Sequelize = require('sequelize')

router.get(`/`, (req, res, next) => {
  console.log("I am in the back end!")
  Channel.findAll({
    include: [{
      model: PrivateMessage
    },
    {model: User, where: {id: req.user.id}}
    ],
  })
  .then(channels => res.json(channels))
  .catch(next)
})

router.get('/:channelId', (req, res, next) => {
  Channel.findById(req.params.channelId, {
    include: [{
      model: PrivateMessage,
      include: [{
        model: User,
        as: 'recipient'
      },
      {
        model: User,
        as: 'sender'
      }
    ]}]
  })
  .then(messages => res.json(messages))
  .catch(next)
})

router.post('/:userId/publicmessage', (req, res, next) => {
  console.log(req.body)
  PublicMessage.sendMessage(req.body)
  res.json('Message sent!')
  // .then(() => res.json('Message sent!'))
  // .catch(next)
})

router.get('/:userId/publicmessages', (req, res, next) => {
  console.log("I am in the back!")
  PublicMessage.findAll({where:
    {recipientId: req.params.userId},
    include: [
      {model: User, as: 'sender'}
    ]
  })
  .then(asks => res.json(asks))
  .catch(next)
})

module.exports = router

