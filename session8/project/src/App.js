import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Crud from './Crud';
import Parent from './Parent';
import Child from './Child';
import CounterContextProvider from './Context/CounterContextProvider';
import DataContextProvider from './Context/DataContextProvider';
import Users from './Users';
import Category from './Category';
import {store} from './Redux/Store'
import {Provider} from 'react-redux'
import Contact from './Contact';
function App() {
  return (
      <>
        {/* <CounterContextProvider>
          <Parent />
          <Child />
        </CounterContextProvider> */}
        {/* <DataContextProvider>
            <Users />
            <Category />
        </DataContextProvider>   */}

      <Provider store={store}>
          <Contact />
      </Provider>

        {/* <Crud /> */}
      </>
  );
}

export default App;
