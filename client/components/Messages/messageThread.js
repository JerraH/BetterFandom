import React, {Component} from 'react';
import { default as Message } from './MessageId';
import ErrorBoundary from '../ErrorBoundary';
import {connect} from 'react-redux'
import { getMessageThread } from '../../store';
import { PropTypes } from 'prop-types';


class MessageThread extends Component {


  componentDidMount() {
    this.props.getMessageThread(this.props.match.params.threadId);
  }

  render() {
    console.log(this.props.messages)
    return (
      <div className="container chat">
          {this.props.messages.map(message => {
            console.log("My message is", message)
            return (
              <ErrorBoundary key={message.id}>
                <Message key={message.id} message={message} />
              </ErrorBoundary>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  messages: state.messages
})



const mapDispatchToProps = dispatch => {
  return {
    getMessageThread(threadId) {
      dispatch(getMessageThread(threadId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageThread);

MessageThread.propTypes = {
  getMessageThread: PropTypes.func.isRequired,
}
