import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ThemeContextProvider from './context/ThemeContext';
import Layout from './components/Layout';

import './app.global.scss';
import './App.scss';
import Dashboard from './components/pages/Dashboard';
import Sidebar from './components/Sidebar/Sidebar';
import ViewInvoice from './components/pages/ViewInvoice';

function App() {
  return (
    <ThemeContextProvider>
      <Layout>
        <Router>
          <Sidebar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/view-invoice' component={ViewInvoice} />
          </Switch>
        </Router>
      </Layout>
    </ThemeContextProvider>
  );
}

export default App;
