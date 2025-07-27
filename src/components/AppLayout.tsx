import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const AppLayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const AppHeader = styled.header`
  background: white;
  border-bottom: 1px solid #e2e8f0;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  h1 {
    color: #1a202c;
    font-size: 24px;
    font-weight: 700;
    margin: 0;
  }
`;

const LogoutButton = styled.button`
  background: #e53e3e;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #c53030;
    transform: translateY(-1px);
  }
`;

const AppMain = styled.main`
  flex: 1;
  padding: 24px;
  background: #f7fafc;
`;

export const AppLayout = () => {
  return (
    <AppLayoutContainer>
      <AppHeader>
        <h1>Motion App</h1>
        <LogoutButton 
          onClick={() => {
            localStorage.removeItem('isAuthenticated');
            localStorage.removeItem('user');
            window.location.href = '/';
          }}
        >
          Logout
        </LogoutButton>
      </AppHeader>
      <AppMain>
        <Outlet />
      </AppMain>
    </AppLayoutContainer>
  );
}; 