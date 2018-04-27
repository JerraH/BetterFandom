/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const User = db.model('user')
let userOne, userTwo, userThree, userFour, userFive, userSix, userSeven, userEight, userNine


describe('User model', () => {

  beforeEach(() => {
    return db.sync({force: true})
  })
  beforeEach(() => {
    Promise.all([
      User.create({email: 'cody@email.com', password: '123'}),
      User.create({email: 'murphy@email.com', password: '123'}),
      User.create({email: 'jerra.haynes@gmail.com', password: '123'}),
      User.create({email: 'hellomybaby@gmail.com', password: '123'}),
      User.create({email: 'whispers@aol.com', password: '123'}),
      User.create({email: 'whereveryougo@gmail.com', password: '123'}),
      User.create({email: 'fuckthisshithonestly@gmail.com', password: '123'}),
      User.create({email: 'whatislove@aol.com', password: '123'}),
      User.create({email: 'toofreakinquiet@aol.com', password: '123'}),
    ])
    .then((users) => {
      userOne = users[0];
      userTwo = users[1];
      userThree = users[2];
      userFour = users[3];
      userFive = users[4];
      userSix = users[5];
      userSeven = users[7];
    })

  })



  describe('instanceMethods', () => {
    describe('correctPassword', () => {
      let cody


      beforeEach(() => {
        return User.create({
          email: 'cody@puppybook.com',
          password: 'bones'
        })
          .then(user => {
            cody = user
          })
      })

      it('returns true if the password is correct', () => {
        expect(cody.correctPassword('bones')).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(cody.correctPassword('bonez')).to.be.equal(false)
      })
    }) // end describe('correctPassword')
    describe('Add Follower', () => {
      it('can add a follower to a user', () => {
            userOne.addFollower(userTwo)
            .then(() =>
              User.findById(1, {include: {model: 'Following'}})
            )
            .then(() => {
              expect(userOne.followers).to.be.equal(userTwo);
            })
      }) //endDescribe('correctPassword')

    })
  }) // end describe('instanceMethods')
}) // end describe('User model')
