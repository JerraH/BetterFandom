/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const db = require('../server/db')
const {User, Post, PrivateMessage, PublicMessage, Flag, Tag, UserProfile, Comment, getFollowing, Channel} = require('../server/db/models')
const Op = require('sequelize').Op

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')
  let postOne, postTwo, postThree, postFour, postFive, postSix, postSeven, postEight;
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

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
  const postList = await Promise.all([
    Post.create({content: "Ennui kitsch actually scenester et gastropub try-hard cred. Mustache dolore pabst echo park pug. Chicharrones offal irony bicycle rights mustache pop-up, af dolore esse kickstarter yr. Chia ennui neutra, pok pok lumbersexual selvage bushwick food truck kinfolk dolore. Pug slow-carb proident air plant VHS nostrud mustache. Velit +1 activated charcoal dolore cliche kogi williamsburg deserunt chicharrones mollit raclette austin umami.", userId: 4}),
    Post.create({content: "Reprehenderit truffaut migas bitters qui bushwick la croix tumeric XOXO health goth YOLO brooklyn. Deserunt commodo proident sint cold-pressed literally quinoa elit vegan air plant food truck. Chicharrones palo santo bicycle rights lumbersexual, man bun aesthetic elit hot chicken skateboard tote bag ut hexagon. Veniam mlkshk gochujang hexagon cliche laborum. Roof party hella raclette readymade chambray tousled brooklyn mustache. +1 schlitz irony, in banh mi fam hot chicken.", userId: 6}),
    Post.create({content: "Copper mug brooklyn bicycle rights, hexagon selfies bushwick schlitz edison bulb mumblecore lo-fi tumblr. Portland cray hell of cred etsy pickled franzen hexagon pabst gastropub. Helvetica shaman gentrify, air plant brooklyn knausgaard cred waistcoat XOXO wolf jianbing. Echo park unicorn subway tile, taiyaki mlkshk semiotics umami lomo.    ", userId: 3}),
    Post.create({content: "Hackathon technology crowdsource. Network effects holy grail conversion. Business-to-consumer prototype business model canvas innovator startup. Ownership first mover advantage twitter incubator MVP assets traction technology learning curve.", userId: 1}),
    Post.create({content: "Hackathon technology crowdsource. Network effects holy grail conversion. Business-to-consumer prototype business model canvas innovator startup. Ownership first mover advantage twitter incubator MVP assets traction technology learning curve.", userId: 2}),
    Post.create({content: "Non-disclosure agreement iPhone accelerator creative founders graphical user interface gamification. Sales gamification interaction design traction focus scrum project incubator success disruptive holy grail. Technology agile development startup conversion interaction design android infographic MVP partnership iPad first mover advantage. Vesting period accelerator responsive web design social media beta long tail.", userId: 7}),
    Post.create({content: "If You Can Watch This And Not Feel Surprised, Then You're Made Of Stone", userId: 4}),
    Post.create({content: "Was This Queer Physicist Actually A Forger?", userId: 5}),
    Post.create({content: "Facebook iPad monetization technology business plan bootstrapping analytics churn rate funding prototype. Direct mailing niche market churn rate. Technology channels investor iPhone alpha business plan MVP creative metrics agile development entrepreneur incubator social proof. Leverage network effects early adopters branding hypotheses partnership.", userId: 5}),
  ])
  const followers = await Promise.all([
    users[0].addFollower(users[6]),
    users[0].addFollower(users[3]),
    users[0].addFollower(users[2]),
    users[0].addFollower(users[1]),
    users[0].addFollower(users[5]),
  ])
  const userProfiles = await Promise.all([
    UserProfile.create({filteredWords: ['strawberry', 'missus', 'girlfriend', 'fifteen'], postBlacklist: [], postGraylist: [], about: 'fourscore and seven years ago our fathers brought forth upon this continent a new nation', gender: 'male', pronouns: 'he/him'}),
    UserProfile.create({filteredWords: ['strawberry'], postBlacklist: [], postGraylist: [], about: 'fourscore and seven years ago our fathers brought forth upon this continent a new nation', gender: 'male', pronouns: 'he/him'}),
    UserProfile.create({filteredWords: ['strawberry', 'screaming'], postBlacklist: [], postGraylist: [], about: 'fourscore and seven years ago our fathers brought forth upon this continent a new nation', gender: 'demigirl', pronouns: 'she/they/him'}),
    UserProfile.create({filteredWords: ['strawberry'], postBlacklist: [], postGraylist: [], about: 'fourscore and seven years ago our fathers brought forth upon this continent a new nation', gender: 'unknown', pronouns: 'ze/zir'}),
    UserProfile.create({filteredWords: ['strawberry'], postBlacklist: [], postGraylist: [], about: 'fourscore and seven years ago our fathers brought forth upon this continent a new nation', gender: 'girl', pronouns: 'he/him'}),
    UserProfile.create({filteredWords: ['strawberry'], postBlacklist: [], postGraylist: [], about: 'fourscore and seven years ago our fathers brought forth upon this continent a new nation', gender: 'male', pronouns: 'he/him'}),
    UserProfile.create({filteredWords: ['strawberry'], postBlacklist: [], postGraylist: [], about: 'fourscore and seven years ago our fathers brought forth upon this continent a new nation', gender: 'male', pronouns: 'he/him'}),
  ])
  const setUserProfiles = await Promise.all([
    users[0].setUserProfile(userProfiles[0]),
    users[1].setUserProfile(userProfiles[1]),
    users[2].setUserProfile(userProfiles[2]),
    users[3].setUserProfile(userProfiles[3]),
    users[4].setUserProfile(userProfiles[4]),
    users[5].setUserProfile(userProfiles[5]),
    users[6].setUserProfile(userProfiles[6]),
  ])
  const Channels = await Promise.all([
    Channel.create(),
    Channel.create(),
    Channel.create(),
  ])
  const pMs = await Promise.all([
    PrivateMessage.create({
      content: 'hi my name is jerra what is your name', senderId: 4, recipientId: 3, channelId: 1
    }),
    PrivateMessage.create({
      content: 'hi my name is jerra what is your name', senderId: 3, recipientId: 5, channelId: 3
    }),
    PrivateMessage.create({
      content: 'Akatsuki no kuruma wo miokutte', senderId: 3, recipientId: 5, channelId: 3
    }),
    PrivateMessage.create({
      content: 'hi I love you!', senderId: 5, recipientId: 3
    }),
    PrivateMessage.create({
      content: 'hi my name is jerra what is your name', senderId: 3, recipientId: 6
    }),
    PrivateMessage.create({
      content: 'hi my name is jerra what is your name', senderId: 3, recipientId: 6
    }),
  ])
  const asks = await Promise.all([
    PublicMessage.create({
      content: 'whisper what it is you want', senderId: 4, recipientId: 3
    }),
    PublicMessage.create({
      content: 'You ain\'t never had a friend like me', senderId: 3, recipientId: 5
    }),
    PublicMessage.create({
      content: 'WHAHAHA, oh my', senderId: 3, recipientId: 5
    }),
    PublicMessage.create({
      content: 'WELL ali baba had dem 40 thieves', senderId: 5, recipientId: 3
    }),
    PublicMessage.create({
      content: 'Scherezade had a thousand tales', senderId: 3, recipientId: 6, channelId: 2
    }),
    PublicMessage.create({
      content: 'master you in luck cause UP YOUR SLEEVE you got a brand of magic never fails!', senderId: 3, recipientId: 6
    }),
  ])
  // .then(() => PrivateMessage.findAll({include: [{model: User, as: 'recipient'}, {model: User, as: 'sender'}]})
  //   .then((messages) => {
  //     messages.forEach(message => {
  //       let myChannel = Channel.findOne({where: {
  //         [Op.or]: [
  //           {name: message.sender.email + ' ' + message.recipient.email},
  //           {name: message.recipient.email + ' ' + message.sender.email }
  //         ]
  //       }})
  //       if (myChannel) {
  //         message.setChannel(myChannel)
  //       } else {
  //         let newChannel = Channel.create({name:     message.sender.email + ' ' + message.recipient.email})
  //         .then(channel => {
  //           message.setChannel(channel)
  //         })
  //       }

  //     });
  //   })
  // )






    // Wowzers! We can even `await` on the right-hand side of the assignment operator
    // and store the result that the promise resolves to in a variable! This is nice!

    console.log(`seeded ${users.length} users`)
    console.log(`seeded ${postList.length} posts`)
    console.log(`seeded ${followers.length} followers`)
    console.log(`seeded ${pMs.length} private messages`)
    console.log(`seeded ${asks.length} asks`)
    console.log(`seeded ${userProfiles.length} user profiles`)
    console.log(`added ${setUserProfiles.length} user profiles to users!`)
    console.log(`seeded successfully`)
  }


  // Execute the `seed` function
  // `Async` functions always return a promise, so we can use `catch` to handle any errors
  // that might occur inside of `seed`
  seed()
    .catch(err => {
      console.error(err.message)
      console.error(err.stack)
      process.exitCode = 1
    })
    .then(() => {
      console.log('closing db connection')
      db.close()
      console.log('db connection closed')
    })

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...')
