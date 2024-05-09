import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import Root from './pages/Root';
import Home from './pages/Home';
import About from './pages/About';
import Competition from './pages/Competition';
import Team from './pages/Team';
import Donate from './pages/Donate';
import Join from './pages/Join';
import Contact from './pages/Contact';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/competition',
        element: <Competition />,
      },
      {
        path: '/team',
        element: <Team />,
      },
      {
        path: '/donate',
        element: <Donate />,
      },
      {
        path: '/join',
        element: <Join />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
