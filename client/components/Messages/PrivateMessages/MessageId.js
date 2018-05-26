import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';


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
                  <Link to={`/users/${message.sender.id}`} key={message.sender.id}>{message.sender.username}</Link>
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
