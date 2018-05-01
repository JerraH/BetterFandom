import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { setRecipient } from '../../store';



class ChannelHead extends Component {
  constructor(props) {
    super(props)
    this.state = {
      otherUser: this.props.channel.privateMessages[0].senderId !== this.props.user.id ?
      this.props.channel.privateMessages[0].sender :
       this.props.channel.privateMessages[0].recipient,

    }
  }

  componentDidMount() {
    this.props.setRecipient(this.state.otherUser)
  }

  render() {
    const channel = this.props.channel

    // console.log("my props are", props);
    console.log("my sender id is", channel.privateMessages[0].senderId)


    return (
      <Link to={`/messages/${channel.id}`} key={channel.id}>
        <div className="card message-thread">
        <div className="card-body">
          <div className="card-header">
            <div className="card-title">{this.state.otherUser.username}</div>
          </div>

          <div className="card-text preview">{channel.privateMessages[0].content}</div>
        </div>
      </div>
    </Link>
    )
  }
  }

const mapStateToProps = (state, ownProps) => ({
  recipient: state.recipient,
  channel: ownProps.channel
})

const mapDispatchToProps = (dispatch) => {
  return {
    setRecipient(user) {
      dispatch(setRecipient(user))
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ChannelHead)

