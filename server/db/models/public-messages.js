

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
  const recipient = User.findById(message.recipientId, {
    include: [
      {model: UserProfile}
    ]
  })
  const bannedWords = recipient.userProfile.filteredWords

  if (bannedWords.length) {
    bannedWords.forEach((word) => {
      if (message.content.contains(word)) {
        //add a mark to the sender's user profile
        //do not send the thing
        sendable = false;
      }
    })
  }

  if (sendable === true) {
    PublicMessage.create(message)
  }

}


module.exports = PublicMessage;
