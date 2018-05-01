import React, { Component } from 'react';
import { sendAskToUser, sendPrivateMessage } from '../../store';
import { connect } from 'react-redux'

class ChatReply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }



 handleChange = (event) => {
    event.preventDefault()
    this.setState({[event.target.name]: event.target.value})
    console.log(this.state.message)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("recipientId", this.props.recipientId)
    console.log('senderId', this.props.user.id)
    //here do a dispatch
    sendPrivateMessage({content: event.target.value, recipientId: this.props.recipientId, channelId: this.props.channelId, senderId: this.props.user.id })
  }

  render() {
    return (
      <div className="card chat-reply">
        <div className="form-group">
          <input onChange={this.handleChange} className="form-control" type="textArea" name="message" value={this.state.message} />
          <div className="buttonholder card-footer">
            <button className="btn btn-primary" onClick={this.handleSubmit}>Send</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.user,
})


const mapDispatchToProps = (dispatch) => {
  return {
    sendPrivateMessage(message) {
      dispatch(sendPrivateMessage(message))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatReply);

