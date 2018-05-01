
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {WriteBlogEntry, Tabs} from '../index';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import ErrorBoundary from '../ErrorBoundary';

/**
 * COMPONENT
 */
class UserHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabIndex: 1
    };
  }


 render() {
   const {username} = this.props;
   const tabs = ['Bit Feed', 'Block Feed', 'Write Bit', 'Write Block'];
  return (

      <div className="container">
        <div className="card">
          <div className="card-title">
            <h3>Welcome, {username}</h3>
          </div>
        </div>
        <div className="card content-block">
            <Tabs tabs={tabs} />
        </div>
      </div>

  ) } }


/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.user.username,
    email: state.user.email,
    // defaultActiveTabIndex: state.home.defaultActiveTabIndex;

  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string,

  defaultActiveTabIndex: PropTypes.string
}
