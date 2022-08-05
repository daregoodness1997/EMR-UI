import { Breadcrumbs as MUIBreadcrumbs, Typography } from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Breadcrumbs() {
  const location = useLocation();

  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <MUIBreadcrumbs
      aria-label='breadcrumb'
      sx={{ display: 'flex', flexWrap: 'nowrap' }}
    >
      {pathnames.map((name, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return last ? (
          <Typography
            color='text.primary'
            key={to}
            style={{
              textDecoration: 'none',
              textTransform: 'capitalize',
              fontWeight: 'medium',
              whiteSpace: 'nowrap',
            }}
          >
            {name} <i className='bi bi-chevron-right'></i>
            {/* Pass breadcrumb context  */}
          </Typography>
        ) : (
          <Link to={to}>{to}</Link>
        );
      })}
    </MUIBreadcrumbs>
  );
}

export default Breadcrumbs;
