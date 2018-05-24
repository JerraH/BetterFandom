
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {WriteBlogEntry, BlockFeed, BitFeed} from '../index';
import React, { Component } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import { Tab, Tabs, TabList, TabPanel} from 'react-tabs';

/**
 * COMPONENT
 */
class UserHome extends Component {

 render() {
   const username = this.props.username;

  return (

      <div className="container userHome">
        <div className="card">
          <div className="card-title">
            <h3>Welcome, {username}</h3>
          </div>
        </div>
        <Tabs>
            <TabList className="nav nav-tabs">
                <Tab className="nav-item">Bit Feed</Tab>
                <Tab className="nav-item">Block Feed</Tab>
                <Tab className="nav-item">Write Bit</Tab>
                <Tab className="nav-item">Write Block</Tab>
            </TabList>
          <div className="card tabContent">
            <TabPanel>
              <BitFeed />
            </TabPanel>
            <TabPanel>
              <BlockFeed />
            </TabPanel>
            <TabPanel>
              <div className="card">Future Content GOes Here</div>
            </TabPanel>
            <TabPanel>
              <WriteBlogEntry />
            </TabPanel>
          </div>
        </Tabs>
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
