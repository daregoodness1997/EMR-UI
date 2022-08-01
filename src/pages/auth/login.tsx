import React from 'react';
import { Input, PasswordInput } from '../../components';
import { AuthWrapper } from '../../core-ui';

const Login = () => {
  return (
    <AuthWrapper paragraph='Login here as an organization'>
      <form>
        <Input label='Email' placeholder='Enter your email address' />
        <PasswordInput />
      </form>
    </AuthWrapper>
  );
};

export default Login;
