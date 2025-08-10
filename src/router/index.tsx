import { createHashRouter } from 'react-router-dom';
import { Protected } from './protected';
import { Login } from '../pages/auth/Login';
import { Layout } from '../components/Layout';
import { Dashboard } from '../pages/app/Dashboard';
import { Settings } from '../pages/app/Settings';

export const router = createHashRouter([
  {
    path: '/',
    element: <Login />,
  },
  //   {
  //     path: '/register',
  //     element: <Register />,
  //   },
  {
    element: <Protected />,
    children: [
      {
        path: '/dashboard',
        element: <Layout />,
        children: [
          { index: true, element: <Dashboard /> },
        ],
      },
      {
        path: '/board',
        element: <Layout />,
        children: [
          { index: true, element: <Dashboard /> },
        ],
      },
      {
        path: '/settings',
        element: <Layout />,
        children: [
          { index: true, element: <Settings /> },
        ],
      },
    ],
  },
]);
