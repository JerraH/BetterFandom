
##Comments

GET /api/comments/:postId
--get all comments on a post
GET /api/comments/:userId/notifications
--get all comments made on posts YOU WROTE
GET /api/comments/:userId/commenthistory
--get all comments you have written
POST /api/comments/
--post comment
PUT /api/comments/:commentId
--edit comment
DELETE /api/comments/:commentId
--delete comment

## Feed

GET /api/feed/blocks
--get all block posts
GET /api/feed/bits
--get all bit posts
POST /api/feed/
--post bit or block

## Messaging

GET /api/messages
--Get Private Messages in Channels (intended to be used on the list of private message threads page)
GET /api/messages/:channelId
--Get all messages on a particular message thread, called a channel
POST /api/messages/
--send a private message
POST /api/messages/:userId/publicmessage
--send a public message, or "shout"
GET /api/messages/:userId/publicmessages
--get all public messages, or "shouts", for a user
