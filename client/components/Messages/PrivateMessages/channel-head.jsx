import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { getOtherUser } from '../../../store';


function ChannelHead(props) {
    const channel = props.channel
    const PMS = props.channel.privateMessages
    console.log('pms', PMS)
    let otherUsers;
    const senderList =  PMS.map(PM => PM.sender)
    console.log(senderList)
    otherUsers = senderList.filter(thisuser => thisuser.id !== props.user.id)
    console.log('other users', otherUsers)

    //what this ends up doing
    // otherUsers = otherUsers.forEach(user => props.getOtherUserBound(user))


    console.log('users', console.log(otherUsers));
    return (
      <Link to={`/messages/${channel.id}`} key={channel.id}>
      <div className="card message-thread">
        <div className="card-body">
          <div className="card-title">
            { otherUsers.map(user => { return (
            <span key={user.id}>{user.username}, </span>
            ) }) }
          </div>
          <div className="card-text preview">{channel.privateMessages[0].content}</div>
        </div>
      </div>
      </Link>
      )
    }


const mapStateToProps = (state, ownProps) => ({
  channel: ownProps.channel,
  user: state.user,
  participants: state.user.participants
})

const mapDispatchToProps = dispatch => {
  return {
    //pretty sure this currently returns you only one user and puts it on your state and if you concat it will end up with an endless user chain and if you replace it won't get them all soo
    getOtherUserBound(userId){
      dispatch(getOtherUser(userId))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChannelHead)

