import React, {Component} from 'react';
import { default as Message } from './MessageId';
import ErrorBoundary from '../ErrorBoundary';
import {connect} from 'react-redux'
import { setRecipient, getMessageThread } from '../../store';
import { PropTypes } from 'prop-types';
import {ChatReply} from '../index';
import { getOtherUser } from '../../store/userProfile';


class MessageThread extends Component {
  constructor(props) {
    super(props)
    this.state = {
      channelId: this.props.match.params.channelId
    }
  }



  componentDidMount() {
    this.props.getMessageThread(this.props.match.params.threadId);
  }

  render() {
    console.log(this.props.otherUser)
    let otherUser = this.props.otherUser
    // this.props.messages[0].senderId !== this.props.user.id ?
    //   recipientId = this.props.messages[0].senderId :
    //   recipientId = this.props.messages[0].recipientId
    return (
      <div className="container chat">
        <h3>{otherUser}</h3>
          {this.props.messages.map(message => {
            return (
              <ErrorBoundary key={message.id}>
                <Message key={message.id} message={message} />
              </ErrorBoundary>
            )
          })
        }
        <ChatReply channelId={this.channelId} recipientId={this.props.recipient.id} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  messages: state.messages,
  user: state.user,
  recipient: state.recipient
})




const mapDispatchToProps = dispatch => {
  return {
    getMessageThread: (threadId) => dispatch(getMessageThread(threadId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageThread);

MessageThread.propTypes = {
  getMessageThread: PropTypes.func.isRequired,
}
