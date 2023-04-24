import React from 'react';
import { ErrorBoundary } from '../error-boundary/error-boundary';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GetRequest } from '../../api/get-request';
import Header from '../header';
import Home from '../../pages/home';
import { Registration } from '../../pages/registration';
import { Login } from '../../pages/login';
import { Content } from '../../pages/content';
import UsersAccount from '../../pages/users-account';
import Footer from '../footer';

const App = () => {

  return (
    <ErrorBoundary>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/users/account" element={<UsersAccount />} />
          <Route exact path="/movies"
            element={<Content request={new GetRequest().getDataMoviesPopular()} />}>
          </Route>
          <Route exact path="/people"
            element={<Content request={new GetRequest().getDataPeoplePopular()} />}>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </ErrorBoundary>
  );
}

export default App;