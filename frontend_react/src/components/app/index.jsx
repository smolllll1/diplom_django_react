import React from 'react';
import { ErrorBoundary } from '../error-boundary/error-boundary';
import { AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GetRequest } from '../../api/get-request';
import Header from '../header';
import Home from '../../pages/home';
import Registration from '../../pages/registration';
import Login from '../../pages/login';
import { Content } from '../../pages/content';
import UsersAccount from '../../pages/users-account';
import UsersSettings from '../../pages/users-settings';
import Footer from '../footer';
import { DataProvider } from '../data-context/data-context'

const App = () => {

  return (
    <ErrorBoundary>
      <AnimatePresence mode="wait" initial={false}>
        <Router>
          <DataProvider>
            <Header />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/registration" element={<Registration />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/users/account" element={<UsersAccount />} />
              <Route exact path="/settings" element={<UsersSettings />} />
              <Route exact path="/movies"
                element={<Content
                  request={new GetRequest().getDataMoviesPopular()} />}>
              </Route>
              <Route exact path="/people"
                element={<Content
                  request={new GetRequest().getDataPeoplePopular()} />}>
              </Route>
            </Routes>
            <Footer />
          </DataProvider>
        </Router>
      </AnimatePresence>
    </ErrorBoundary>
  );
}

export default App;