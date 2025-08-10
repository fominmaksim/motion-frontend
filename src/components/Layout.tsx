import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Sidebar } from './Sidebar';

const AppLayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  background: #121212;
`;

const AppMain = styled.main`
  flex: 1;
  margin-left: 250px;
  padding: 24px;
  background: #121212;
  color: #BBBBBB;
`;

export const Layout = () => {
  return (
    <AppLayoutContainer>
      <Sidebar />
      <AppMain>
        <Outlet />
      </AppMain>
    </AppLayoutContainer>
  );
}; 