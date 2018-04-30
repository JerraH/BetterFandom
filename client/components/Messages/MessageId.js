import React from 'react';
import { connect } from "react-redux";


function Message(props) {
  let message = props.message
  console.log("my message is", message)
  return (
    <div>
        { message.senderId === props.user.id ?
          <div className="card message-right">
            <div className="card-body">
              <p className="card-text">{message.content}</p>
            </div>
          </div> :
          <div className="card message-left">
            <div className="card-header">
              <p className="card-title username">
                {message.sender.username}
              </p>
            </div>
            <div className="card-body">
              <p className="card-text">{message.content}</p>
            </div>
          </div>
        }
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    user: state.user

  }
}

export default connect(mapStateToProps)(Message)
