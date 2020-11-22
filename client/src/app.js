import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as routes from './routes';
// Components
import Header from './components/Header';
import Login from './pages/Login';
import Home from './pages/Home';
import ReduxDemo from './pages/ReduxDemo';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Header />
      <main className="bg-primaryLight">
        <div className="h-screen max-w-7xl mx-auto px-4 py-6 sm:px-6">
          <Switch>
            <Route path={ routes.home } component={Home} exact />
            <Route path={ routes.login } component={Login} />
            <Route path={ routes.reduxDemo } component={ReduxDemo} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </main>
    </>
  );
}

export default App;
