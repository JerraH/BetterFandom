import {Tab} from '../index';
import PropTypes from 'prop-types'

import React, { Component } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import WriteBlogEntry from '../blogs/write-blog-entry.jsx';


class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabIndex: this.props.defaultActiveTabIndex
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    event.preventDefault()
    this.setState({activeTabIndex: event.target.value})
    console.log(this.state.activeTabIndex)
  }

  //This will toggle the currently active tab`

  render() {
    return (
      <ErrorBoundary>
        <ul className="nav nav-tabs nav-fill">
          { this.props.tabs.map((tab) => { return (

            <Tab key={tab.id} tab={tab} handleClick={this.handleClick} />
          ) }) }
        </ul>
        <div className="tabDisplay">
          <WriteBlogEntry />
          </div>

      </ErrorBoundary>
    );
  }
}

export default Tabs;

Tabs.propTypes = {
  tabs: PropTypes.array,
  defaultActiveTabIndex: PropTypes.string
}
