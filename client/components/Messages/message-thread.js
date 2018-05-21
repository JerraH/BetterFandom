import React, {Component} from 'react';
import { default as Message } from './MessageId';
import ErrorBoundary from '../ErrorBoundary';
import {connect} from 'react-redux'
import { getMessageChannel } from '../../store';
import { PropTypes } from 'prop-types';
import {ChatReply} from '../index';


class MessageThread extends Component {
  constructor(props) {
    super(props)
    this.state = {
      channelId: this.props.match.params.channelId
    }
  }


  componentDidMount() {
    let channelId = this.props.match.params.channelId
    this.props.boundgetMessageChannel(channelId);
  }


  render() {
    // this.props.messages[0].senderId !== this.props.user.id ?
    //   recipientId = this.props.messages[0].senderId :
    //   recipientId = this.props.messages[0].recipientId
    console.log('my messages are', this.props.messages)
    let messages = this.props.messages
    return (
      <div className="container chat">
        <h3>{this.props.channel.users}</h3>
          {messages.map(message => {
            return (
              <ErrorBoundary key={message.id}>
                  <Message key={message.id} message={message} />
              </ErrorBoundary>
            )
          })
        }
        <ChatReply channelId={this.state.channelId} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  messages: state.messages.messages,
  channel: state.messages.channels,
  user: state.user,
  recipient: state.recipient
})


const mapDispatchToProps = dispatch => {
  return {
    boundgetMessageChannel: (channelId) => dispatch(getMessageChannel(channelId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageThread);

MessageThread.propTypes = {
  boundgetMessageChannel: PropTypes.func.isRequired,
}
