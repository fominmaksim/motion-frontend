import styled from 'styled-components';
import {
  Typography,
  TypographyVariant,
  TypographyColors,
} from '../../components/Typography/Typography';
import { useAuth } from '../../hooks/useAuth';

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

export const Dashboard = () => {
  const { currentUser } = useAuth();

  return (
    <DashboardContainer>
      <DashboardHeader>
        <Typography color={TypographyColors.GRAY_100} variant={TypographyVariant.H2}>
          Welcome, {currentUser?.displayName || 'User Name'}!
        </Typography>
        <Typography color={TypographyColors.GRAY_400} variant={TypographyVariant.BODY1}>
          You have successfully logged in to the Motion app.
        </Typography>
      </DashboardHeader>

      <DashboardContent></DashboardContent>
    </DashboardContainer>
  );
};
