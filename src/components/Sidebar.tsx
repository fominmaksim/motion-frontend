import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background: #1e1e1e;
  border-right: 1px solid #393939;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  overflow-y: auto;
`;

const SidebarHeader = styled.div`
  padding: 24px 20px;
  border-bottom: 1px solid #393939;
  
  h2 {
    color: #BBBBBB;
    font-size: 20px;
    font-weight: 600;
    margin: 0;
  }
`;

const SidebarNav = styled.nav`
  padding: 20px 0;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0;
`;

const NavLink = styled(Link)<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  color: ${props => props.$isActive ? '#FFFFFF' : '#BBBBBB'};
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  background: ${props => props.$isActive ? 'rgba(102, 126, 234, 0.1)' : 'transparent'};
  border-left: 3px solid ${props => props.$isActive ? '#667eea' : 'transparent'};

  &:hover {
    background: rgba(102, 126, 234, 0.05);
    color: #FFFFFF;
  }

  svg {
    width: 18px;
    height: 18px;
    margin-right: 12px;
    fill: currentColor;
  }
`;

const SidebarFooter = styled.div`
  padding: 20px;
  border-top: 1px solid #393939;
  margin-top: auto;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  
  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    margin-right: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    font-size: 14px;
  }
  
  .user-details {
    flex: 1;
    
    .name {
      color: #FFFFFF;
      font-size: 14px;
      font-weight: 600;
      margin: 0;
    }
    
    .email {
      color: #BBBBBB;
      font-size: 12px;
      margin: 0;
    }
  }
`;

// Icon components
const DashboardIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
  </svg>
);

const BoardIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
  </svg>
);

const SettingsIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
  </svg>
);

const LogoutIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
  </svg>
);

const navigationItems = [
  {
    path: '/dashboard',
    label: 'Dashboard',
    icon: DashboardIcon,
  },
  {
    path: '/board',
    label: 'Board',
    icon: BoardIcon,
  },
  {
    path: '/settings',
    label: 'Settings',
    icon: SettingsIcon,
  },
];

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  return (
    <SidebarContainer>
      <SidebarHeader>
        <h2>Motion</h2>
      </SidebarHeader>
      
      <SidebarNav>
        <NavList>
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <NavItem key={item.path}>
                <NavLink to={item.path} $isActive={isActive}>
                  <Icon />
                  {item.label}
                </NavLink>
              </NavItem>
            );
          })}
        </NavList>
      </SidebarNav>

      <SidebarFooter>
        <UserInfo>
          <div className="avatar">
            {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
          </div>
          <div className="user-details">
            <p className="name">{user.name || 'User'}</p>
            <p className="email">{user.email || 'user@example.com'}</p>
          </div>
        </UserInfo>
        
        <NavLink 
          to="#" 
          onClick={handleLogout}
          $isActive={false}
          style={{ marginTop: '12px' }}
        >
          <LogoutIcon />
          Logout
        </NavLink>
      </SidebarFooter>
    </SidebarContainer>
  );
}; 