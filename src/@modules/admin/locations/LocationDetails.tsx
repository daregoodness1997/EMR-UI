import React, { useState } from 'react';
import DetailView from '../../../@views/DetailView';
import { useParams } from 'react-router-dom';
import { locationList } from '../../../utils/data';
import { Box, Typography } from '@mui/material';
import DynamicInput from '../../../components/Inputs/DynamicInput';
import { LocationSchema } from '../../../utils/schema';

const LocationDetails = () => {
  const [isEditing, setIsEditing] = useState(false);

  const { id } = useParams();
  const details: any = locationList.filter((band, index) => {
    return band.id === id;
  });

  let keys = Object.keys(details[0]);
  const renderLabel = (key: any) => {
    if (key === 'id') return 'ID';
    if (key === 'name') return 'Name';
    if (key === 'locationType') return 'Location Type';
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => null;

  return (
    <DetailView
      title='Location Detail'
      onEdit={handleEdit}
      onDelete={handleDelete}
    >
      {isEditing ? (
        <>
          {LocationSchema.map(({ inputType, key, name, options }, idx) => (
            <DynamicInput
              key={key}
              name={key}
              inputType={inputType}
              label={name}
              options={options}
              value={details[0][key]}
            />
          ))}
        </>
      ) : (
        <>
          {keys.map((key, idx) => {
            return (
              <Box>
                <label>{renderLabel(key)}</label>
                <Typography variant='body2'>{`${details[0][key]}`}</Typography>
              </Box>
            );
          })}
        </>
      )}
    </DetailView>
  );
};

export default LocationDetails;
