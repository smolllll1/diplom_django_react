import React, { useEffect } from 'react';
import { ErrorBoundary } from '../error-boundary/error-boundary';
// import { Service } from '../../services/service';
import Header from '../header';
import Footer from '../footer';
import Main from '../main';

const App = () => {

  useEffect(() => {
    // const data = new Service().getData();
    // console.dir(data)
  }, [])
  // const data = new Service().getData();
  // console.dir(data)

  return (
    <ErrorBoundary
    // fallback={<p>Something went wrong</p>}
    >
      <Header />
      <Main />
      <Footer />
    </ErrorBoundary>
  );
}

export default App;