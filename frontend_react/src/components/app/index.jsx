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
import { MoviesPages } from '../../pages/movies-pages';
import {MoviesListInfo} from '../movies-list-info';
import { PeoplePages } from '../../pages/people-pages';
import { PeopleListInfo } from '../people-list-info';
import Search from "../../pages/search";
import UsersAccount from '../../pages/users-account';
import UsersSettings from '../../pages/users-settings';
import NotFound from '../../pages/not-found';
import { AuthenticationDataProvider } from '../data/authentication-data';
import { ContentDataProvider } from '../data/content-data';
import { SearchValueProvider } from '../data/search-value';
import Layout from '../layout/layout';

const App = () => {

  return (
    <ErrorBoundary>
      <AnimatePresence mode="wait" initial={false}>
        <AuthenticationDataProvider>
          <ContentDataProvider>
            <SearchValueProvider>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  {/* public routes */}
                  <Route exact path="registration" element={<Registration />} />
                  <Route exact path="login" element={<Login />} />
                  <Route exact path="users/account" element={<UsersAccount />} />
                  <Route exact path="settings" element={<UsersSettings />} />
                  <Route exact path="search" element={<Search />} />
                  {/* content pages */}
                  <Route exact path="pop_movies" element={<MoviesPages />} />
                  <Route exact path="pop_movies/:moviesId" element={<MoviesListInfo />} />
                  <Route exact path="pop_people" element={<PeoplePages />} />
                  <Route exact path="pop_people/:personId" element={<PeopleListInfo />} />
                  {/* catch all missing */}
                  <Route exact path="*" element={<NotFound />}></Route>
                </Route>
              </Routes>
            </SearchValueProvider>
          </ContentDataProvider>
        </AuthenticationDataProvider>
      </AnimatePresence>
    </ErrorBoundary >
  );
}

export default App;