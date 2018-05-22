
import {connect} from 'react-redux';

import React, { Component } from 'react';
import {WriteMessage} from '../index';
import { sendAskToUser, getOtherUser } from '../../store'
import ErrorBoundary from '../ErrorBoundary';

class UserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openMessage: false
    }
    this.shoutAt = this.shoutAt.bind(this);
    this.unshout = this.unshout.bind(this);
  }
  componentDidMount() {
    getOtherUser(this.props.match.params.userId)
  }


  shoutAt() {
    this.setState({openMessage: true});
  }
  unshout() {
    this.setState({openMessage: false});
  }


  render() {
    console.log('my user profile is', this.props.userProfile)
    console.log(this.props.user)
    return (
      <ErrorBoundary>

      <div className="container">
        <div className="header">
          <h3>{this.props.userProfile.username}</h3>
        </div>
        <div className="pageBody">
          <div className="buttonholder">
            <button onClick={this.shoutAt}>Send me a message!</button>
          </div>
          {this.state.openMessage ? <div>
            <WriteMessage recipientId={this.props.match.params.userId} userId={this.props.user.id} unshout={this.unshout} />
            </div> : null
          }
          <div className="card">
            <div className="card-header">
              <div className="card-title">About Me</div>
            </div>
          </div>
          <div />
          <div />
        </div>
      </div>
      </ErrorBoundary>

    )
  }
}


const mapStateToProps = (state) => ({
  user: state.user,
  userProfile: state.userProfile
})

const mapDispatchToProps = (dispatch) => {
  return {
    getOtherUserBound(desiredUser) {
      dispatch(getOtherUser(desiredUser))
    }

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)

