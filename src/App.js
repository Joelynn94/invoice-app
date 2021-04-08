import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './app.global.scss';
import './App.scss';
import Layout from './components/Layout';
import ThemeContextProvider from './context/ThemeContext';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/pages/Dashboard';
import ViewInvoice from './components/pages/ViewInvoice';

function App() {
  return (
    <ThemeContextProvider>
      <Layout>
        <Router>
          <Sidebar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/invoice/:id' component={ViewInvoice} />
          </Switch>
        </Router>
      </Layout>
    </ThemeContextProvider>
  );
}

export default App;
