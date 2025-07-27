import { Outlet } from 'react-router-dom';

export const Protected = () => {
  //   const isSignedIn = true;
  //   if (isSignedIn) {
  //     return <Navigate to="/board" />;
  //   }

  return <Outlet />;
};
