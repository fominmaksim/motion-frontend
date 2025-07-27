import styled from 'styled-components';

const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const DashboardHeader = styled.div`
  margin-bottom: 32px;
  text-align: center;

  h2 {
    color: #1a202c;
    font-size: 32px;
    font-weight: 700;
    margin: 0 0 8px 0;
  }

  p {
    color: #718096;
    font-size: 18px;
    margin: 0;
  }
`;

const DashboardContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
`;

const DashboardCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;

  h3 {
    color: #2d3748;
    font-size: 20px;
    font-weight: 600;
    margin: 0 0 16px 0;
  }

  p {
    color: #4a5568;
    line-height: 1.6;
    margin: 0 0 16px 0;
  }

  ul {
    color: #4a5568;
    line-height: 1.6;
    margin: 0;
    padding-left: 20px;

    li {
      margin-bottom: 8px;
    }
  }
`;

export const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <DashboardContainer>
      <DashboardHeader>
        <h2>Welcome, {user.name || 'User'}!</h2>
        <p>You have successfully logged in to the Motion app.</p>
      </DashboardHeader>
      
      <DashboardContent>
        <DashboardCard>
          <h3>Getting Started</h3>
          <p>This is a mock dashboard. In a real application, you would see your actual data and functionality here.</p>
        </DashboardCard>
        
        <DashboardCard>
          <h3>Features</h3>
          <ul>
            <li>Authentication system</li>
            <li>Protected routes</li>
            <li>Responsive design</li>
            <li>Modern UI/UX</li>
          </ul>
        </DashboardCard>
      </DashboardContent>
    </DashboardContainer>
  );
}; 