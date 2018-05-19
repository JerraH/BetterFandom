
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
   const username = this.props.username;
   const tabs = [{name: 'Bit Feed', id: 1}, {name: 'Block Feed', id: 2}, {name: 'Write Bit', id: 3}, {name: 'Write Block', id: 4}];
  return (

      <div className="container userHome">
        <div className="card">
          <div className="card-title">
            <h3>Welcome, {username}</h3>
          </div>
        </div>
        <div className="card tabContainer">
          <Tabs tabs={tabs} />
        </div>
      </div>

  ) } }


/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    user: state.user,
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
