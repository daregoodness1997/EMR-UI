import { Box, InputLabel, Typography } from '@mui/material';
import React from 'react';

interface RadioButtonProps {
  label: string;
  value: any;
  onChange: (e?: any) => void;
//   defaultValue: any;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  value,
  onChange,
//   defaultValue,
}) => {
  const isChecked = (checked: boolean) => {
    if (checked)
      return {
        boxShadow: '4px 4px 20px rgba(0,0,0,0.08)',
        background: 'white',
        border: '1px solid blue',
      };
    return;
  };
  return (
    <InputLabel className='filter-switch-item' onChange={onChange}>
      <input
        type='radio'
        name={label}
        id='filter1-0'
        checked={value}
        // defaultValue={defaultValue}
        style={{
          display: 'none',
        }}
      />
      <Typography
        variant='body2'
        sx={{
          py: 0.8,
          px: 2,
          cursor: 'pointer',
          background: isChecked(value)?.background,
          borderRadius: '4px',
          boxShadow: isChecked(value)?.boxShadow,
          border: isChecked(value)?.border,
        }}
      >
        {label}
      </Typography>
    </InputLabel>
  );
};

export default RadioButton;
