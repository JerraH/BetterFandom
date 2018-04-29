import React from 'react';

const ChannelHead = (props) => {
  const channel = props.channel
  // console.log("my props are", props);
  console.log("my sender id is", channel.privateMessages[0].senderId);
  return (
    <div className="card message-thread">
    <div className="card-body">
      <div className="card-header">
        {(channel.privateMessages[0].senderId !== props.user.id) ?
        <div className="card-title">{channel.privateMessages[0].sender.username}</div> :
        <div className="card-title">{channel.privateMessages[0].recipient.username}</div>
        }
      </div>
      <div className="card-text preview">{channel.privateMessages[0].content}</div>
    </div>
  </div>
  )
}

;

export default ChannelHead;
