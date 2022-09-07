import { Link, useNavigate } from 'react-router-dom';
import { Button, PasswordInput } from '../../components';
import { AuthWrapper } from '../../core-ui';

const CreatePassword = () => {
  let navigate = useNavigate();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    navigate('/', { replace: true });
  };
  return (
    <AuthWrapper paragraph='Forgot your password'>
      <form onSubmit={handleSubmit}>
        <PasswordInput label='Enter new password' />
        <PasswordInput label='Confirm new password' />

        <Button type='submit' label='Confirm Email' fullwidth='true' />
        <p>
          Remember your passowrd?
          <Link
            className='nav-link'
            style={{
              padding: '0',
              background: 'transparent',
              color: 'blue',
              marginLeft: '0.6rem',
            }}
            to='/login'
          >
            Login
          </Link>
        </p>
      </form>
    </AuthWrapper>
  );
};

export default CreatePassword;
