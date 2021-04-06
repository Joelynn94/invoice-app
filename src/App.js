import ThemeContextProvider from './context/ThemeContext';
import Layout from './components/Layout';

import './app.global.scss';
import './App.scss';
import Dashboard from './components/pages/Dashboard';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <ThemeContextProvider>
      <Layout>
        <Sidebar />
        <Dashboard />
      </Layout>
    </ThemeContextProvider>
  );
}

export default App;
