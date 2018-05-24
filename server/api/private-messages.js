const router = require('express').Router()
const {User, PrivateMessage, Channel, PublicMessage} = require('../db/models')
const db = require('../db')
const Op = require('sequelize').Op
const Sequelize = require('sequelize')


//Get private messages: this is intended to be used on the list of private message threads page

router.get(`/`, (req, res, next) => {
  let Participant = db.models.participants
  console.log(req.user.id)
  Participant.findAll({where: {
      userId: req.user.id
    }})
    .then(participants => participants.map(participant => participant.channelId))
    .then(channels => {
      console.log('channels', channels)
      return Channel.findAll({
      where: {
        id: {
          [Op.or]: channels
        }
      }, include: [{model: PrivateMessage, include: {model: User, as: 'sender'}}]
    })})
  .then(channels => res.json(channels) )
  // res.json(channels))
  .catch(next)
})

//one individual conversation

router.get('/:channelId', (req, res, next) => {
  console.log('I am here')
  Channel.findById(req.params.channelId, {
    include: [{
      model: PrivateMessage,
      include: [{model: User, as: 'sender'}]
    }]
  })
  .then(messages => res.json(messages))
  .catch(next)
})


//send somebody a private message
router.post('/', (req, res, next) => {
  PrivateMessage.sendMessage(req.body)
  .then(message => res.json(message))
  .catch(next)
})

//shout at somebody
router.post('/:userId/publicmessage', (req, res, next) => {
  console.log(req.body)
  PublicMessage.sendMessage(req.body)
  res.json('Message sent!')
  // .then(() => res.json('Message sent!'))
  // .catch(next)
})

//get your shouts
router.get('/:userId/publicmessages', (req, res, next) => {
  console.log('I am in the back!')
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

