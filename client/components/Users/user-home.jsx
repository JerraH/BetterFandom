
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import WriteBlogEntry from '../index';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

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
          <div className="card">
            <div className="card-title">
              <h3>Welcome, {email}</h3>
            </div>
          </div>
          <div className="card content-block">
            <div className="tabs">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <Link className="nav-link">Beychella</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link">My baby</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link">Hello</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )

    }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {

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
