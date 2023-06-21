import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './components/Home';
import Count from './components/Count';
import About from './components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
const routers = createBrowserRouter([
  {
    path:"/" ,
    element:<App />,
    children:[
      {path:"/home",element:<Home />},
      {path:"/count",element:<Count />},
      {path:"/about",element:<About />}

    ]
  }
])
root.render(
    <RouterProvider router={routers} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
