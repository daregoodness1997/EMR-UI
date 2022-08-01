import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
} from '@mui/material';
import React from 'react';
import { Button, Input, PasswordInput } from '../../components';
import { AuthWrapper } from '../../core-ui';

const Login = () => {
  return (
    <AuthWrapper paragraph='Login here as an organization'>
      <form>
        <Input label='Email' placeholder='Enter your email address' />
        <PasswordInput />
        <FormControl component='fieldset' sx={{ width: '1r00%', mt: 1, mb: 1 }}>
          <FormGroup>
            <FormControlLabel
              label='Keep me Logged in'
              control={<Checkbox name='keepMeIn' />}
            />
          </FormGroup>
        </FormControl>
        <Button type='submit' label='Login' fullwidth='true' />
      </form>
    </AuthWrapper>
  );
};

export default Login;
