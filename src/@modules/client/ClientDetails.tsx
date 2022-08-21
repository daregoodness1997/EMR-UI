import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailView from '../../@views/DetailView';
import DynamicInput from '../../components/Inputs/DynamicInput';
import { clientsList } from '../../utils/data';
import { ClientSchema } from '../../utils/schema';

const ClientDetails = () => {
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);

  const details: any = clientsList.filter((client, index) => {
    return client.id === id;
  });

  let keys = Object.keys(details[0]);

  console.log('list', clientsList);

  const renderLabel = (key: any) => {
    if (key === 'id') return 'ID';
    if (key === 'firstname') return 'First Name';
    if (key === 'middlename') return 'Middle Name';
    if (key === 'lastname') return 'Last Name';
    if (key === 'dob') return 'Date of Birth';
    if (key === 'gender') return 'Gender';
    if (key === 'maritalstatus') return 'Marital Status';
    if (key === 'residentialaddress') return 'Residential Address';
    if (key === 'email') return 'Email Address';
    if (key === 'phone') return 'Phone Number';
    if (key === 'town') return 'Town';
    if (key === 'state') return 'State';
    if (key === 'country') return 'Country';
    if (key === 'nextofkin') return 'Next Of Kin';
    if (key === 'nextofkinphone') return 'Next Of Kin Phone Number';
    if (key === 'company') return 'Company';
    if (key === 'isVerified') return 'isVerfied';
    if (key === 'status') return 'Status';
    return 'Label';
  };

  const handleEditing = () => {
    setIsEditing(true);
  };

  const returnInputType = (idx: any) => {
    if (ClientSchema[idx]) return ClientSchema[idx].inputType;

    return 'TEXT';
  };
  const returnOptions = (idx: any) => {
    if (ClientSchema[idx]) return ClientSchema[idx].options;

    return null;
  };

  return (
    <DetailView title={`${details[0].firstname}`} onEdit={handleEditing}>
      {keys.map((key, idx) => {
        // console.log('key', ClientMiniSchema[idx]);

        if (isEditing && key !== 'id')
          return (
            <>
              <DynamicInput
                key={idx}
                label={renderLabel(key)}
                name={key}
                value={details[0][key]}
                inputType={`${returnInputType(idx)}`}
                options={returnOptions(idx) || []}
              />
            </>
          );
        return (
          <Box key={idx}>
            <label>{renderLabel(key)}</label>
            <Typography variant='body2'>{`${details[0][key]}`}</Typography>
          </Box>
        );
      })}
    </DetailView>
  );
};

export default ClientDetails;
