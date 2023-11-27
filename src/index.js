import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PageNotFound from './components/PageNotFound';
import Contact from './components/Contact';
import Offers from './components/Offers';
import Cart from './components/Cart';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';

const appRouter = createBrowserRouter([
  {
    path: '',
    element: <App />,
    errorElement: <PageNotFound />
  },
  {
    path: 'offers-near-me',
    element: <Offers />
  },
  {
    path: 'contact',
    element: <Contact />
  },
  {
    path: 'cart',
    element: <Cart />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
