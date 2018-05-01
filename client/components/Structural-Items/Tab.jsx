import React from 'react';
import ErrorBoundary from '../ErrorBoundary';

const Tab = (props) => {
  return (
    <ErrorBoundary>
      <li className="tab">
    <a
        onClick={(event) => {
          event.preventDefault();
          props.onClick(props.tabIndex);
    }}>{props.tabName}
    </a>

  </li>
    </ErrorBoundary>

);
}

export default Tab;
