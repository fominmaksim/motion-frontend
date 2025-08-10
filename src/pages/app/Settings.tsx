import React from 'react';
import styled from 'styled-components';
import { Typography, TypographyVariant } from '../../components/Typography/Typography';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const SettingsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const SettingsHeader = styled.div`
  margin-bottom: 32px;
`;

const SettingsSection = styled.div`
  background: #1e1e1e;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
  border: 1px solid #393939;
`;

const SettingsItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #393939;

  &:last-child {
    border-bottom: none;
  }
`;

const SettingsLabel = styled.div`
  color: #BBBBBB;
  font-size: 16px;
  font-weight: 500;
`;

const SettingsValue = styled.div`
  color: #718096;
  font-size: 14px;
`;

const Toggle = styled.div<{ $isActive: boolean }>`
  width: 48px;
  height: 24px;
  background: ${props => props.$isActive ? '#667eea' : '#393939'};
  border-radius: 12px;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: ${props => props.$isActive ? '26px' : '2px'};
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
    transition: all 0.2s ease;
  }
`;

const LogoutButton = styled.button`
  background: #e53e3e;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #c53030;
    transform: translateY(-1px);
  }
`;

export const Settings: React.FC = () => {
  const [notifications, setNotifications] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(true);
  const [autoSave, setAutoSave] = React.useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <SettingsContainer>
      <SettingsHeader>
        <Typography variant={TypographyVariant.H1}>Settings</Typography>
        <Typography variant={TypographyVariant.BODY1}>
          Manage your account preferences and application settings.
        </Typography>
      </SettingsHeader>

      <SettingsSection>
        <Typography variant={TypographyVariant.H3}>
          Notifications
        </Typography>
        
        <SettingsItem>
          <SettingsLabel>Email Notifications</SettingsLabel>
          <Toggle 
            $isActive={notifications} 
            onClick={() => setNotifications(!notifications)}
          />
        </SettingsItem>
        
        <SettingsItem>
          <SettingsLabel>Push Notifications</SettingsLabel>
          <Toggle 
            $isActive={notifications} 
            onClick={() => setNotifications(!notifications)}
          />
        </SettingsItem>
      </SettingsSection>

      <SettingsSection>
        <Typography variant={TypographyVariant.H3}>
          Appearance
        </Typography>
        
        <SettingsItem>
          <SettingsLabel>Dark Mode</SettingsLabel>
          <Toggle 
            $isActive={darkMode} 
            onClick={() => setDarkMode(!darkMode)}
          />
        </SettingsItem>
        
        <SettingsItem>
          <SettingsLabel>Auto Save</SettingsLabel>
          <Toggle 
            $isActive={autoSave} 
            onClick={() => setAutoSave(!autoSave)}
          />
        </SettingsItem>
      </SettingsSection>

      <SettingsSection>
        <Typography variant={TypographyVariant.H3}>
          Account
        </Typography>
        
        <SettingsItem>
          <SettingsLabel>Email</SettingsLabel>
          <SettingsValue>
            {currentUser?.email || 'demo@example.com'}
          </SettingsValue>
        </SettingsItem>
        
        <SettingsItem>
          <SettingsLabel>Display Name</SettingsLabel>
          <SettingsValue>
            {currentUser?.displayName || 'Demo User'}
          </SettingsValue>
        </SettingsItem>
        
        <SettingsItem>
          <SettingsLabel>Member Since</SettingsLabel>
          <SettingsValue>
            {currentUser?.metadata?.creationTime 
              ? new Date(currentUser.metadata.creationTime).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long' 
                })
              : 'January 2024'
            }
          </SettingsValue>
        </SettingsItem>

        <SettingsItem>
          <SettingsLabel>Actions</SettingsLabel>
          <LogoutButton onClick={handleLogout}>
            Sign Out
          </LogoutButton>
        </SettingsItem>
      </SettingsSection>
    </SettingsContainer>
  );
}; 