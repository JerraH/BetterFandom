import React, { Component } from 'react';
import { sendAskToUser, sendPrivateMessage } from '../../../store';
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types';

class ChatReply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.timeDiff = ''
  }


 handleChange = (event) => {
    event.preventDefault()
    this.setState({[event.target.name]: event.target.value})
    console.log(this.state.message)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('recipientId', this.props.recipientId)
    console.log('senderId', this.props.user.id)

    //here do a dispatch
    this.props.sendPrivateMessageBound({content: this.state.message, channelId: this.props.channelId, senderId: this.props.user.id });
    this.setState({message: ''})
  }


  render() {
    return (
      <div className="card chat-reply">
        <form className="form-group" onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} className="form-control" type="textArea" name="message" value={this.state.message} />
          <div className="buttonholder card-footer">
            <button type="submit" className="btn btn-primary">Send</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.user
})


const mapDispatchToProps = (dispatch) => {
  return {
    sendPrivateMessageBound(message) {
      dispatch(sendPrivateMessage(message))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatReply);

