import { faker } from '@faker-js/faker';
import { Box, Typography } from '@mui/material';
import React from 'react';

const NewsCard = () => {
  const fakeImg = faker.image.nature();
  return (
    <Box
      sx={{
        borderRadius: '16px',
        // backgroundColor: '#fff',
        margin: '0 0 24px',
      }}
    >
      <img
        style={{
          width: '100%',
          height: '180px',
          borderRadius: '6px',
        }}
        src={fakeImg}
        alt={fakeImg}
      />
      <Typography
        variant='h3'
        sx={{ fontSize: '16px', fontWeight: 'bold', mt: 1, mb: 1 }}
      >
        Covid-19: Lagos State to start door-to-door vaccination.
      </Typography>
      <Box sx={{ padding: '10px 0', color: '#000' }}>
        <i className='bi bi-clock'></i>{' '}
        <small style={{ marginLeft: '4px' }}>Monday, September 22</small>
      </Box>
      <Typography variant='body2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, provident,
        voluptatem molestiae debitis quos quibusdam autem ipsa ab quasi deleniti
        quo quod quidem expedita ipsam necessitatibus eaque voluptate ullam!
        Itaque, quam tenetur?
      </Typography>
    </Box>
  );
};

export default NewsCard;
