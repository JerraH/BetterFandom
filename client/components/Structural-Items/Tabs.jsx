import { Tab } from './tab.jsx';
import PropTypes from 'prop-types'

import React, { Component } from 'react';



class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabIndex: this.props.defaultActiveTabIndex
    };
    this.handleClick = this.handleClick.bind(this);
  }

  //This will toggle the currently active tab`

  render() {
    return (
      <div>
        <ul className="nav-tabs">
          { this.props.tabs.map((tab) => { return (
          <Tab key={tab.id} props={tab} /> ) }) }
        </ul>
      </div>
    );
  }
}

export default Tabs;

Tabs.propTypes = {
  tabs: PropTypes.string,
  defaultActiveTabIndex: PropTypes.string
}
