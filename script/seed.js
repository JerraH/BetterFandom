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
const {User, Post, PrivateMessage, Flag, Tag, UserProfile, Comment, getFollowing} = require('../server/db/models')

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')
  let postOne, postTwo, postThree, postFour, postFive, postSix, postSeven, postEight;
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  const users = await Promise.all([
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
  const pMs = await Promise.all([
    PrivateMessage.create({
      content: 'hi my name is jerra what is your name', senderId: 4, recipientId: 3
    }),
    PrivateMessage.create({
      content: 'hi my name is jerra what is your name', senderId: 3, recipientId: 5
    }),
    PrivateMessage.create({
      content: 'hi my name is jerra what is your name', senderId: 3, recipientId: 5
    }),
    PrivateMessage.create({
      content: 'hi my name is jerra what is your name', senderId: 3, recipientId: 6
    }),
    PrivateMessage.create({
      content: 'hi my name is jerra what is your name', senderId: 3, recipientId: 6
    }),
  ])






  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${postList.length} posts`)
  console.log(`seeded ${followers.length} followers`)
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
