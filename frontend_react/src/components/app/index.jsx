import React from 'react';
import { ErrorBoundary } from '../error-boundary/error-boundary';

import './app.css';

const App = () => {
  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <div>
      </div>
    </ErrorBoundary>
  );
}

export default App;