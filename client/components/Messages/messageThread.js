import React from 'react';
import { Message } from './MessageId';
import ErrorBoundary from '../ErrorBoundary';
import {connect} from 'react-redux'

const MessageThread = (props) => (
  <div>{
    props.messages.map(message => {
      return (
        <ErrorBoundary>
          <Message key={message.id} props={message} />
        </ErrorBoundary>
      )
    })
  }

  </div>
);

const mapStateToProps = state => {
  const { messages } = state
  return { messages }
}

export default connect(mapStateToProps)(MessageThread);
