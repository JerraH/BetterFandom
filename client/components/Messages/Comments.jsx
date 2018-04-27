import React, { Component } from 'react';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

 handleChange = (event) => {
    event.preventDefault()
    this.setState(event.target.name = event.target.value)
    console.log(this.state.comment)
  }

handleSubmit = (event) => {
  event.preventDefault()
  //here do a dispatch
}

  render() {
    return (
      <div className="card">
        <input onChange={this.handleChange} type="textArea" name="comment" value={this.state.comment} />
        <div className="buttonholder">
          <button>Submit</button>
          <button>Cancel</button>
        </div>
      </div>
    );
  }
}

export default Comment;


