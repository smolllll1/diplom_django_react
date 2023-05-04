import React from 'react';
import { ErrorBoundary } from '../error-boundary/error-boundary';
import { AnimatePresence } from 'framer-motion'
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from '../../pages/home';
import Registration from '../../pages/registration';
import Login from '../../pages/login';
import PopularMovies from '../popular-movies';
import PopularPeople from '../popular-people';
import ItemListInfo from '../item-list-info';
import UsersAccount from '../../pages/users-account';
import UsersSettings from '../../pages/users-settings';
import NotFound from '../../pages/not-found';
import { AuthenticationDataProvider } from '../data/authentication-data';
import { ContentDataProvider } from '../data/content-data';
import Layout from '../layout/layout';

const App = () => {

  return (
    <ErrorBoundary>
      <AnimatePresence mode="wait" initial={false}>
        <AuthenticationDataProvider>
          <ContentDataProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                {/* public routes */}
                <Route exact path="registration" element={<Registration />} />
                <Route exact path="login" element={<Login />} />
                <Route exact path="users/account" element={<UsersAccount />} />
                <Route exact path="settings" element={<UsersSettings />} />
                {/* content pages */}
                <Route exact path="movies" element={<PopularMovies />} />
                <Route exact path="people" element={<PopularPeople />} />
                <Route exact path="information" element={<ItemListInfo />} />
                {/* catch all missing */}
                <Route exact path="*" element={<NotFound />}></Route>
              </Route>
            </Routes>
          </ContentDataProvider>
        </AuthenticationDataProvider>
      </AnimatePresence>
    </ErrorBoundary>
  );
}

export default App;