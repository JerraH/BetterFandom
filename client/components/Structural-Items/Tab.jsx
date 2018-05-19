import React from 'react';
import ErrorBoundary from '../ErrorBoundary';

const Tab = (props) => {
  const tab = props.tab;
  return (
    <ErrorBoundary>
      <li className="nav-item">
      <a
      value={tab.id}
      className="nav-link"
        onClick={props.handleClick}
    >{tab.name}
    </a>

  </li>
    </ErrorBoundary>

);
}

export default Tab;
