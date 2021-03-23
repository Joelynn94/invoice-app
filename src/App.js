import './app.global.scss';
import './App.scss';
import Dashboard from './components/pages/Dashboard';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className='App'>
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
