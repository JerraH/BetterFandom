import React, { Component } from 'react';
import {postMyComment} from '../../../store/index';
import {connect} from 'react-redux'

class WriteComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputContent: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

 handleChange = (event) => {
    event.preventDefault()
    this.setState({[event.target.name]: event.target.value})
  }

handleSubmit = (event) => {
  event.preventDefault()
  this.props.postMyCommentBound({content: this.state.inputContent, postId: this.props.postId, userId: this.props.user.id})
  this.setState({inputContent: ''})
  //here do a dispatch
}

  render() {
    return (
      <div className="card">
        <input onChange={this.handleChange} type="textArea" name="inputContent" value={this.state.inputContent} />
        <form onSubmit={this.handleSubmit} className="buttonholder card-footer">
          <button className="btn btn-primary">Submit</button>
          <button className="btn btn-cancel">Cancel</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.user,
  postId: ownProps.postId
})

const mapDispatchToProps = (dispatch) => {
  return {
     postMyCommentBound(comment) {
       dispatch(postMyComment(comment))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(WriteComment);

