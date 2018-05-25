import React, { Component } from 'react';
import {postMyComment} from '../../store/index';
import {connect} from 'react-redux'

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

 handleChange = (event) => {
    event.preventDefault()
    this.setState({[event.target.name]: event.target.value})
    console.log(this.state.comment)
  }

handleSubmit = (event) => {
  event.preventDefault()
  this.props.postMyCommentBound({content: this.state.comment, postId: this.props.postId, userId: this.props.user.id})
  this.setState({comment: ''})
  //here do a dispatch
}

  render() {
    return (
      <div className="card">
        <input onChange={this.handleChange} type="textArea" name="comment" value={this.state.comment} />
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


export default connect(mapStateToProps, mapDispatchToProps)(Comment);

