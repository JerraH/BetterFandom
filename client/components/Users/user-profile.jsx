
import {connect} from 'react-redux';

import React, { Component } from 'react';
import {WriteMessage, UserpageBlogEntry, About} from '../index';
import { sendAskToUser, getOtherUser } from '../../store'
import ErrorBoundary from '../ErrorBoundary';
import { Tab, Tabs, TabList, TabPanel} from 'react-tabs';

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
    this.props.getOtherUserBound(this.props.match.params.userId)
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
        <div className="pageBody">
        <div className="card header">
          <h3>{this.props.userProfile.data ? this.props.userProfile.data.username : 'error'}</h3>
        </div>
        <Tabs>
          <TabList className="nav nav-tabs">
                <Tab className="nav-item">Blog</Tab>
                <Tab className="nav-item">About</Tab>
                <Tab className="nav-item">Shout at me</Tab>
            </TabList>
          <div className="card tabContent">
            <TabPanel>
              {this.props.userProfile.data ? this.props.userProfile.data.posts.map((post) => {
              return (
                <UserpageBlogEntry key={post.id} post={post} user={this.props.userProfile.user} />
              )
            }) : <div className="alert">This user has no posts to display!</div>}
            </TabPanel>
            <TabPanel>
              <About userProfile={this.props.userProfile.data} />
            </TabPanel>
            <TabPanel>
              <WriteMessage recipientId={this.props.match.params.userId} userId={this.props.user.id} unshout={this.unshout} />
            </TabPanel>
          </div>
        </Tabs>
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

