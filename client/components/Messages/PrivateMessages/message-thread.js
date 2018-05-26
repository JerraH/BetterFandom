import React, {Component} from 'react';
import { default as Message } from './MessageId';
import ErrorBoundary from '../../ErrorBoundary';
import {connect} from 'react-redux'
import { getMessageChannel } from '../../../store';
import { PropTypes } from 'prop-types';
import {ChatReply} from '../../index';


class MessageThread extends Component {
  constructor(props) {
    super(props)
    this.state = {
      channelId: this.props.match.params.channelId

    }
    this.checkIfSame = this.checkIfSame.bind(this);
    this.checkTime = this.checkTime.bind(this)
  }


  componentDidMount() {
    let channelId = this.props.match.params.channelId
    this.props.boundgetMessageChannel(channelId);
  }

  //these guys are going to contain logic for how to present the chat messages depending on how long it's been since the last message got sent, to make the conversation feel more organic

  checkIfSame(thisMes) {
    let mes = this.props.messages
    if (mes[mes.length - 1].senderId === thisMes.senderId) {
      return true
    } else {
      return false
    }
  }

  checkTime(thisMes) {
    let mes = this.props.messages
    let d = Date.now()
    let oldDate = new Date(mes[mes.length - 1].createdAt)
    if (this.checkIfSame(thisMes)) {
      if (d - oldDate < 300000) {
        return 'short'
      } else if (600000 > d - oldDate > 300000) {
        return 'medium'
      } else {
        return 'long'
      }
    }
    // if(checkIfSame(thisMes) && thisMes.createdAt - mes[mes.length -1].createdAt < //5 min )
    console.log(d - oldDate)
  }


  render() {
    // this.props.messages[0].senderId !== this.props.user.id ?
    //   recipientId = this.props.messages[0].senderId :
    //   recipientId = this.props.messages[0].recipientId
    console.log('???', this.state.messages)
    console.log('my messages are', this.props.messages)
    let messages = this.props.messages
    return (

      <div className="container chat">
        <ErrorBoundary>
          <h3>{this.props.channel.users}</h3>
          {messages ? messages.map(message => {
            return (
                  <Message key={message.id} message={message} checkIfSame={this.checkIfSame} />
            )
          }) : <div className="card alert alert-warning">Sorry, you have no messages to display!</div>
        }
        </ErrorBoundary>
        <ChatReply channelId={this.state.channelId} checkTime={this.checkTime} />
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
