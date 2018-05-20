import {Tab} from '../index';
import PropTypes from 'prop-types'

import React, { Component } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import WriteBlogEntry from '../blogs/write-blog-entry.jsx';
import {Link} from 'react-router-dom'


class Tabs extends Component {
  constructor(props) {
    super(props);

  }


  //This will toggle the currently active tab`

  render() {
    return (
      <ErrorBoundary>

        <ul className="nav nav-tabs nav-fill">
          { this.props.tabs.map((tab) => { return (

              <Tab key={tab.id} tab={tab} setActiveTab=
            {this.props.setActiveTab} />
          ) }) }
        </ul>


      </ErrorBoundary>
    );
  }
}

export default Tabs;

Tabs.propTypes = {
  tabs: PropTypes.array,
  defaultActiveTabIndex: PropTypes.string
}
