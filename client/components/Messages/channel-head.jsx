import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


function ChannelHead(props) {
  let user = props.user;
    const channel = props.channel
    const otherUsers = channel.users.filter((thisUser) => thisUser.id !== user.id)

    console.log('my props are', props);
    return (
      <Link to={`/messages/${channel.id}`} key={channel.id}>
        <div className="card message-thread">
        <div className="card-body">
          <div className="card-header">
          { otherUsers.map(user => {
            console.log('my user is', user)
            return (
              <div className="card-title" key={user.id}>{user.username}</div>
            )
          })
          }
          </div>

          <div className="card-text preview">{channel.privateMessages[0].content}</div>
        </div>
      </div>
    </Link>
    )
  }

const mapStateToProps = (state, ownProps) => ({
  channel: ownProps.channel,
  user: state.user
})


export default connect(mapStateToProps)(ChannelHead)

