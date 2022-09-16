import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Input, PasswordInput } from '../../components';
import { DocumentPDF } from '../../components/ReactPDF';
import { AuthWrapper } from '../../core-ui';
import { PDFViewer } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer';

// https://codesandbox.io/s/i1ted?file=/src/Movie.jsx

const Login = () => {
  let navigate = useNavigate();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    navigate('/app', { replace: true });
  };
  return (
    <AuthWrapper paragraph='Login here as an organization'>
      <PDFDownloadLink
        document={<DocumentPDF />}
        fileName='document.pdf'
        style={{
          textDecoration: 'none',
          padding: '10px',
          color: '#4a4a4a',
          backgroundColor: '#f2f2f2',
          border: '1px solid #4a4a4a',
        }}
      >
        Download PDF
        {/* {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download Pdf'
        } */}
      </PDFDownloadLink>
      {/* View Document */}
      {/* <PDFViewer>
        <DocumentPDF />
      </PDFViewer> */}
      <form onSubmit={handleSubmit}>
        <Input label='Email' placeholder='Enter your email address' />
        <PasswordInput />
        <FormControl
          component='fieldset'
          sx={{ width: '100%', mt: 1, mb: 1, fontSize: '0.6rem' }}
        >
          <FormGroup>
            <FormControlLabel
              label='Keep me Logged in'
              control={<Checkbox name='keepMeIn' />}
            />
          </FormGroup>
        </FormControl>
        <Button type='submit' label='Login' fullwidth='true' />
        <p>
          Forgot password?
          <Link
            className='nav-link'
            style={{
              padding: '0',
              background: 'transparent',
              color: 'blue',
              marginLeft: '0.6rem',
            }}
            to='/forgot-password'
          >
            Click here
          </Link>
        </p>
      </form>
      <div className='bottom-center'>
        <p>or continue with</p>
        <a href='#google-login'>
          <i className='bi bi-google' />
        </a>
        <a href='#facebook-login'>
          <i className='bi bi-facebook' />
        </a>
        <a href='#linkedin-login'>
          <i className='bi bi-linkedin' />
        </a>

        <p>
          Want to create organization?
          <Link
            className='nav-link'
            style={{
              padding: '0',
              background: 'transparent',
              color: 'blue',
              marginLeft: '0.6rem',
            }}
            to='/signup'
          >
            Click here
          </Link>
        </p>
      </div>
    </AuthWrapper>
  );
};

export default Login;
