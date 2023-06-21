import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
