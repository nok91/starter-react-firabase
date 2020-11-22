import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/Header';
import Home from '../../pages/Home';
import ReduxDemo from '../../pages/ReduxDemo'

function App() {
  return (
    <>
      <Header />
      <main class="bg-primaryLight">
        <div class="h-screen max-w-7xl mx-auto px-4 py-6 sm:px-6">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/redux-demo" component={ReduxDemo} exact />
          </Switch>
        </div>
      </main>
    </>
  );
}

export default App;
