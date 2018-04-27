import React from 'react';

import {Navbar} from './components';
import Routes from './routes';
import { ErrorBoundary } from "./components/ErrorBoundary";


const App = () => {
  return (
    <div className="container-fluid">
      <ErrorBoundary>
        <Navbar />
        <Routes />
      </ErrorBoundary>

    </div>
  )
}

export default App
