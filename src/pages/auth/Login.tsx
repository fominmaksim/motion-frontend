import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { typographyStyles, TypographyVariant } from '../../components/Typography/typographyStyles';
import { Typography } from '../../components/Typography/Typography';

const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #121212;
  padding: 20px;
`;

const LoginCard = styled.div`
  background: #1e1e1e;
  border-radius: 16px;
  border: 1px solid #393939;
  padding: 30px 40px;
  width: 100%;
  max-width: 400px;
  animation: slideUp 0.6s ease-out;

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 480px) {
    padding: 24px;
    margin: 10px;
  }
`;

const LoginHeader = styled.div`
  text-align: left;
  margin-bottom: 32px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    color: #BBBBBB;
    font-size: 14px;
    font-weight: 600;
  }

  input {
    padding: 12px 16px;
    border: 1px solid #393939;
    border-radius: 8px;
    font-size: 16px;
    transition: all 0.2s ease;
    background: inherit;
    color: #BBBBBB;

    &:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    &:disabled {
      background: #f7fafc;
      cursor: not-allowed;
    }

    @media (max-width: 480px) {
      padding: 10px 14px;
    }
  }
`;

const ErrorMessage = styled.div`
  background: #fed7d7;
  color: #c53030;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  border: 1px solid #feb2b2;
`;

const LoginButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 14px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 8px;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 480px) {
    padding: 12px 20px;
  }
`;

const LoginFooter = styled.div`
  margin-top: 32px;
  text-align: center;
`;

const Title = styled.div`
  ${typographyStyles[TypographyVariant.H3]}
  color: #BBBBBB;
  margin-bottom: 1rem;
`;

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Mock authentication - simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay

      // Mock validation
      if (email === 'demo@example.com' && password === '123Max!') {
        // Mock successful login
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify({ email, name: 'Demo User' }));
        navigate('/board');
      } else {
        setError('Invalid email or password. Try demo@example.com / 123Max!');
      }
    } catch {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoginContainer>
      <LoginCard>
        <LoginHeader>
          <Title>Login</Title>
        </LoginHeader>

        <LoginForm onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={isLoading}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              disabled={isLoading}
            />
          </FormGroup>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <LoginButton type="submit" disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Sign In'}
          </LoginButton>
        </LoginForm>

        <LoginFooter></LoginFooter>
      </LoginCard>
    </LoginContainer>
  );
};
