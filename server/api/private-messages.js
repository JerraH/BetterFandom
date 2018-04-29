const router = require('express').Router()
const {User, PrivateMessage, Channel, PublicMessage} = require('../db/models')
const Op = require('sequelize').Op
const Sequelize = require('sequelize')

router.get(`/`, (req, res, next) => {
  console.log("I am in the back end!")
  Channel.findAll({
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
  }).then(channels => {
      return channels.filter((channel) => {
        return (
          channel.privateMessages[0].senderId === req.user.id ||
          channel.privateMessages[0].recipientId === req.user.id
        )
  })})
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
  PublicMessage.sendMessage(req.body)
})

module.exports = router

