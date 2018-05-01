import {Tab} from '../index';
import PropTypes from 'prop-types'

import React, { Component } from 'react';
import ErrorBoundary from '../ErrorBoundary';



class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabIndex: this.props.defaultActiveTabIndex
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    this.setState({activeTabIndex: event.target.value})
  }

  //This will toggle the currently active tab`

  render() {
    return (
      <div>
        <ul className="nav-tabs">
          { this.props.tabs.map((tab) => { return (
          <ErrorBoundary key={tab.id}>
            <Tab key={tab.id} tab={tab} value={tab.id} onClick={this.handleClick} />
          </ErrorBoundary>
          ) }) }
        </ul>
      </div>
    );
  }
}

export default Tabs;

Tabs.propTypes = {
  tabs: PropTypes.array,
  defaultActiveTabIndex: PropTypes.string
}
