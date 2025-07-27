import { createBrowserRouter } from 'react-router-dom';
import { Protected } from './protected';
import { Login } from '../pages/auth/Login';
import { AppLayout } from '../components/AppLayout';
import { Dashboard } from '../pages/app/Dashboard';

export const router = createBrowserRouter([
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
        path: '/board',
        element: <AppLayout />,
        children: [
          { index: true, element: <Dashboard /> },
          //   { path: 'board/:id', element: <Board /> },
        ],
      },
    ],
  },
]);
