
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
   const {email} = this.props;
  return (

      <div className="container">
      <ErrorBoundary>
        <div className="card">
          <div className="card-title">
            <h3>Welcome, {email}</h3>
          </div>
        </div>
        <div className="card content-block">
          <Tabs />
        </div>
        </ErrorBoundary>
      </div>

  ) } }


/**
 * CONTAINER
 */
const mapState = (state) => {
  return {

    email: state.user.email,
    // defaultActiveTabIndex: state.home.defaultActiveTabIndex;

  }
}

// export default connect(mapState)(UserHome)

export default UserHome;

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string,

  defaultActiveTabIndex: PropTypes.string
}
