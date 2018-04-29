/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const User = db.model('user')
const PrivateMessage = db.model('privateMessage')

describe('User routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/messages/', () => {
    const codysEmail = 'cody@puppybook.com'

    beforeEach(async function() {
      const users = await Promise.all([
        User.create({email: 'cody@email.com', password: '123', username: 'whisperwood'}),
        User.create({email: 'murphy@email.com', password: '123', username: 'FranticFourteen'}),
        User.create({email: 'jerra.haynes@gmail.com', password: '123', username: 'The_Black_Hole'}),
        User.create({email: 'hellomybaby@gmail.com', password: '123', username: 'MsMarvel'}),
        User.create({email: 'whispers@aol.com', password: '123', username: 'NoThatIsn\'tCopyrighted'}),
        User.create({email: 'whereveryougo@gmail.com', password: '123', username: 'LetMyPeopleGo'}),
        User.create({email: 'fuckthisshithonestly@gmail.com', password: '123', username: 'DeadMan\'sChest'}),
        User.create({email: 'whatislove@aol.com', password: '123', username: 'whereverIgo'}),
        User.create({email: 'toofreakinquiet@aol.com', password: '123', username: 'whateverIdo'}),
      ])
      return users;
    })

    beforeEach(async function() {
      const PMs = await Promise.all([
        PrivateMessage.create({
          content: 'hi my name is jerra what is your name', senderId: 4, recipientId: 3
        }),
        PrivateMessage.create({
          content: 'hi my name is jerra what is your name', senderId: 3, recipientId: 5, channelId: 3
        }),
        PrivateMessage.create({
          content: 'Akatsuki no kuruma wo miokutte', senderId: 3, recipientId: 5, channelId: 3
        }),
        PrivateMessage.create({
          content: 'hi I love you!', senderId: 5, recipientId: 3, channelId: 3
        }),
        PrivateMessage.create({
          content: 'hi my name is jerra what is your name', senderId: 3, recipientId: 6, channelId: 2
        }),
        PrivateMessage.create({
          content: 'hi my name is jerra what is your name', senderId: 3, recipientId: 6, channelId: 2
        })])
        return PMs
    })

    it('GET /api/messages/', () => {
      return request(app)
        .get('/api/messages')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array')
          expect(res.body[0].email).to.be.equal(codysEmail)
        })
    })
  }) // end describe('/api/users')
}) // end describe('User routes')
