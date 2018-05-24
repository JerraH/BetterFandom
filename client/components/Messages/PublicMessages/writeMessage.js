import React, { Component } from 'react';
import { sendAskToUser } from '../../../store'
import { connect } from 'react-redux'

class WriteMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
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
    let shout = {content: this.state.message, senderId: this.props.userId, recipientId: +this.props.recipientId}
    this.props.sendAskToUserBound(shout)
    this.setState({message: ''})
    //here do a dispatch
  }

  render() {
    return (
      <div className="card">
        <div className="card-body form-group">
          <label htmlFor="message">Send a message!</label>
          <input onChange={this.handleChange} className="form-control" type="textArea" name="message" value={this.state.message} />
          <div className="buttonholder card-footer">
            <button className="btn btn-primary" onClick={this.handleSubmit}>Shout!</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.user
})


const mapDispatchToProps = (dispatch) => {
  return {
    sendAskToUserBound(message) {
      dispatch(sendAskToUser(message))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WriteMessage);

