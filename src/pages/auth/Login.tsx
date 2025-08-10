import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { typographyStyles, TypographyVariant } from '../../components/Typography/typographyStyles';
import { useAuth } from '../../hooks/useAuth';

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
    color: #bbbbbb;
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
    color: #bbbbbb;

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

const GoogleButton = styled.button`
  background: #4285f4;
  color: white;
  border: none;
  padding: 14px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  margin-top: 16px;

  &:hover:not(:disabled) {
    background: #3367d6;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(66, 133, 244, 0.3);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 24px 0;
  color: #718096;
  font-size: 14px;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #393939;
  }

  span {
    padding: 0 16px;
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
  const { signInWithGoogle } = useAuth();

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

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      setError('');
      await signInWithGoogle();
      navigate('/board');
    } catch (error) {
      setError('Failed to sign in with Google. Please try again.');
      console.error('Google sign-in error:', error);
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

        <Divider>
          <span>or</span>
        </Divider>

        <GoogleButton type="button" onClick={handleGoogleSignIn} disabled={isLoading}>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjY0IDkuMjA0NTVDMTcuNjQgOC41NjY0IDE3LjU4MjcgOC4xMzE4MiAxNy40NzI3IDcuNjY4MTlMMTQuOTI3MyA3LjY2ODE5TDE0LjkyNzMgMTAuNjQ1NUgxNy4zNkMxNy4yNCAxMS4xNjM2IDE2LjgxODIgMTIuNzYzNiAxNS43MjczIDEzLjk4MThDMTQuNjM2NCAxNS4xOTkxIDEyLjg5MDkgMTUuOTk5MSAxMC45MDkxIDE1Ljk5OTFDOC4xNjM2NCAxNS45OTkxIDUuODU0NTUgMTQuMzYzNiA1LjAwNTQ1IDEyLjA5MDlDNC4xNTYzNiA5LjgxODE4IDQuMTU2MzYgNy4wOTA5MSA1LjAwNTQ1IDQuODE4MThDNS44NTQ1NSAyLjU0NTQ1IDguMTYzNjQgMC45MDkwOTEgMTAuOTA5MSAwLjkwOTA5MUMxMi4yNzI3IDAuOTA5MDkxIDEzLjM0NTUgMS4zNjM2NCAxNC4xODE4IDEuOTgxODJMMTYuMDcyNyAwLjE4MTgxOEMxNC45MDkxIC0wLjYzNjM2NCAxMy4wOTA5IC0xLjA5MDkxIDEwLjkwOTEgLTEuMDkwOTFDNy4zMDAwMSAtMS4wOTA5MSA0LjE2MzY0IDAuNzI3MjczIDIuNzI3MjcgMy4wOTA5MUMxLjI5MDkxIDUuNDU0NTUgMS4yOTA5MSA4LjQ1NDU1IDIuNzI3MjcgMTAuODE4MkM0LjE2MzY0IDEzLjE4MTggNy4zMDAwMSAxNC45MDkgMTAuOTA5MSAxNC45MDlDMTMuMzYzNiAxNC45MDkgMTUuNDcyNyAxNC4wOTA5IDE2LjgxODEgMTIuNzI3M0MxNy42MzY0IDExLjgxODEgMTcuNjQgMTAuMDkwOSAxNy42NCA5LjIwNDU1WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+"
            alt="Google"
          />
          Sign in with Google
        </GoogleButton>

        <LoginFooter></LoginFooter>
      </LoginCard>
    </LoginContainer>
  );
};
