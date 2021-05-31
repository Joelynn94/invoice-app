import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ThemeContextProvider from './context/ThemeContext';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import Invoice from './pages/Invoice/Invoice';
import InvoiceForm from './pages/InvoiceForm/InvoiceForm';
import './app.global.scss';
import './App.scss';

function App() {
  return (
    <ThemeContextProvider>
      <AppProvider>
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
      </AppProvider>
    </ThemeContextProvider>
  );
}

export default App;
