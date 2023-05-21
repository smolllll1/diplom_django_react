import React from 'react';
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import { ErrorBoundary } from '../error-boundary/error-boundary';
import { Home } from '../../pages/home';
import { About } from '../../pages/about';
import { Contacts } from '../../pages/contacts';
import { Registration } from '../../pages/registration';
import { Login } from '../../pages/login';
import { MoviesPages } from '../../pages/movies-pages';
import { MoviesListInfo } from '../movies-list-info';
import { PeoplePages } from '../../pages/people-pages';
import { PeopleListInfo } from '../people-list-info';
import { Search } from "../../pages/search";
import { UsersAccount } from '../../pages/users-account';
import { UsersSettings } from '../../pages/users-settings';
import { Updated } from '../../pages/updated';
import { PrivacyPolicy } from '../../pages/privacy-policy';
import { TermsUse } from '../../pages/terms';
import { NotFound } from '../../pages/not-found';
import { AuthenticationDataProvider } from '../data/authentication-data';
import { ContentDataProvider } from '../data/content-data';
import { NotificationDataProvider } from '../data/notification-data';
import { SearchValueProvider } from '../data/search-value';
import { Layout } from '../layout/layout';

const App = () => {

  return (
    <ErrorBoundary>
      <AnimatePresence mode="wait" initial={false}>
        <AuthenticationDataProvider>
          <ContentDataProvider>
            <NotificationDataProvider>
              <SearchValueProvider>
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route exact path="about" element={<About />} />
                    <Route exact path="contacts" element={<Contacts />} />
                    {/* public routes */}
                    <Route exact path="registration" element={<Registration />} />
                    <Route exact path="login" element={<Login />} />
                    <Route exact path="users/account/:usersId" element={<UsersAccount />} />
                    <Route exact path="settings/:usersId" element={<UsersSettings />} />
                    <Route exact path="search" element={<Search />} />
                    {/* content pages */}
                    <Route exact path="pop_movies" element={<MoviesPages />} />
                    <Route exact path="pop_movies/:moviesId" element={<MoviesListInfo />} />
                    <Route exact path="pop_people" element={<PeoplePages />} />
                    <Route exact path="pop_people/:personId" element={<PeopleListInfo />} />
                    {/* page under development */}
                    <Route exact path="updated" element={<Updated />}></Route>
                    {/* terms */}
                    <Route exact path="privacy-policy" element={<PrivacyPolicy />}></Route>
                    <Route exact path="terms" element={<TermsUse />}></Route>
                    {/* catch all missing */}
                    <Route exact path="*" element={<NotFound />}></Route>
                  </Route>
                </Routes>
              </SearchValueProvider>
            </NotificationDataProvider>
          </ContentDataProvider>
        </AuthenticationDataProvider>
      </AnimatePresence>
    </ErrorBoundary >
  );
}

export default App;