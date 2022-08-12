import { Card, CardHeader } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
interface ChartCardProps {
  children: React.ReactNode;
  title?: string;
  subheader?: string;
}

const ChartCard: React.FC<ChartCardProps> = ({
  children,
  title,
  subheader,
  ...other
}) => {
  return (
    <Card
      {...other}
      sx={{
        boxShadow: '4px 4px 20px rgba(255,255,255,0.08)',
        backgroundColor: 'white',
      }}
    >
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ p: 1 }} dir='ltr'>
        {children}
      </Box>
    </Card>
  );
};

export default ChartCard;
