import logo from './logo.svg';
import './App.css';
import {Link,Outlet} from 'react-router-dom'
function App() {
  return (
      <>
        <Link to='/'>app</Link>
        <Link to='/home'>home</Link>
        <Link to='/count'>count</Link>
        <Link to='/about'>about</Link>

        <br />
        hi app

        <Outlet />
      </>
  );
}

export default App;
