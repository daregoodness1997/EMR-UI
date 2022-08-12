import { Card, Typography } from '@mui/material';
import React from 'react';
interface ViewCardProps {
  count: any;
  title: string;
}

const ViewCard: React.FC<ViewCardProps> = ({ title, count }) => {
  return (
    <Card
      sx={{
        p: 6,
        background: '#f9f9f9',
        boxShadow: '0',
        borderRadius: 4,
        width: { lg: '700px', xs: '100%' },
        textAlign: 'center',
        mr: 2,
      }}
    >
      <Typography variant='h1' sx={{ fontWeight: 'bold', fontSize: '55px' }}>
        {count}
      </Typography>
      <Typography>{title}</Typography>
    </Card>
  );
};

export default ViewCard;
