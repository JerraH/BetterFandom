

const Sequelize = require('sequelize')
const db = require('../db')
const UserProfile = require('./user-profile')
const User = require('./user')

const PublicMessage = db.define('publicMessage', {
  content: {
    type: Sequelize.TEXT
  },
  userStatus: {
    type: Sequelize.ENUM('anon', 'signed'),
    defaultValue: 'signed'
  }
})

PublicMessage.sendMessage = (message) => {
  let sendable = true;
  let bannedWords;
  let myMessage;
  User.findById(message.recipientId, {
    include: [
      {model: UserProfile}
    ]
  }).then(recipient => {
    bannedWords = recipient.userProfile.filteredWords
    if (bannedWords.length) {
      bannedWords.forEach((word) => {
        //if there is a banned word in the message
        let regEx = new RegExp(word, 'gi')
        if (regEx.test(message.content)) {
          //add a mark to the sender's user profile
          //do not send the thing
          sendable = false;
        }
      })}
      if (sendable === true) {
        //if it's sendable, send it
        return PublicMessage.create(message)
      } else if (sendable === false) {
        //if not tell the console why but don't tell the user!
        User.findById(message.senderId)
          .then(user => user.blackMark())
        console.log('there were banned words in that there message')
      }
    })
}


module.exports = PublicMessage;
