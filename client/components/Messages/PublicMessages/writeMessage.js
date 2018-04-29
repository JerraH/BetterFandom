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
  }

 handleChange = (event) => {
    event.preventDefault()
    this.setState(event.target.name = event.target.value)
    console.log(this.state.message)
  }

handleSubmit = (event) => {
  event.preventDefault()
  this.props.sendAskToUser({content: event.target.value, senderId: this.props.user.id, recipientId: this.props.match.userId})
  //here do a dispatch
}

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <input onChange={this.handleChange} type="textArea" name="message" value={this.state.message} />
          <div className="buttonholder">
            <button>Submit</button>
            <button>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.user
})


const mapDispatchToProps = dispatch => {
  return {
    sendAskToUser(message) {
      dispatch(sendAskToUser(message))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WriteMessage);

