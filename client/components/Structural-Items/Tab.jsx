import React from 'react';
import ErrorBoundary from '../ErrorBoundary';
import {Link} from 'react-router-dom'

const Tab = (props) => {
  const tab = props.tab;
  return (
    <ErrorBoundary>

      <li className="nav-item" onClick={this.props.setActiveTab}>
        <Link className="nav-link" to={`/home/${tab.id}`}>
        {tab.name}
        </Link>
      </li>
    </ErrorBoundary>

);
}

const mapDispatchToProps = (dispatch) => {

}

export default Tab;
