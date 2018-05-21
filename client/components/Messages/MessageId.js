import React from 'react';
import { connect } from 'react-redux';


function Message(props) {
  let message = props.message;
  console.log('my message is', message)
  console.log(message.senderId, props.user.id)
  return (
    <div>
        { message.senderId === props.user.id ?
          <div className="messageBox forRight">
            <div className="message-right">
              {message.content}
            </div>
          </div> :
          <div className="messageBox forLeft">
            <div className="message-left">
              <p className="username">
                  {message.sender.username}
              </p>
              {message.content}
              </div>
          </div>
        }
    </div>
  )
}


const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    message: ownProps.message
  }
}

export default connect(mapStateToProps)(Message)
