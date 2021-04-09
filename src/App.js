import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './app.global.scss';
import './App.scss';
import ThemeContextProvider from './context/ThemeContext';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard';
import Invoice from './pages/Invoice';
import InvoiceForm from './pages/InvoiceForm';

function App() {
  return (
    <ThemeContextProvider>
      <Layout>
        <Router>
          <Sidebar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/invoice/:id' component={Invoice} />
            <Route path='/create' component={InvoiceForm} />
          </Switch>
        </Router>
      </Layout>
    </ThemeContextProvider>
  );
}

export default App;
