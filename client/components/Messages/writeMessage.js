import React, { Component } from 'react';

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
  //here do a dispatch
}

  render() {
    return (
      <div className="card">
        <input onChange={this.handleChange} type="textArea" name="message" value={this.state.message} />
        <div className="buttonholder">
          <button>Submit</button>
          <button>Cancel</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { message } = state
  return { message }
}

export default WriteMessage;
