import { Stack } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../components';
import DynamicInput from '../../components/Inputs/DynamicInput';
import { InputType } from '../../pages/app/schema/utils';

function ExistingAdminEmployee() {
  const { control } = useForm();
  return (
    <Stack spacing={3} sx={{ width: '100%' }}>
      <form>
        <DynamicInput
          inputType={InputType.TEXT}
          key={'mail'}
          name='organizationEmail'
          label='Organization Email'
          control={control}
          options={[]}
        />

        <Button type='submit' label='Send Invitation' fullwidth='true' />
      </form>
    </Stack>
  );
}

export default ExistingAdminEmployee;
