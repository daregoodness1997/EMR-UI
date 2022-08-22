import React, { useState } from 'react';
import DetailView from '../../../@views/DetailView';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { bandList } from '../../../utils/data';
import { Box, Typography } from '@mui/material';
import DynamicInput from '../../../components/Inputs/DynamicInput';
import { BandSchema } from '../../../utils/schema';

const BandDetails = () => {
  const [isEditing, setIsEditing] = useState(false);

  const { id } = useParams();
  const details: any = bandList.filter((band, index) => {
    return band.id === id;
  });

  let keys = Object.keys(details[0]);
  const renderLabel = (key: any) => {
    if (key === 'id') return 'ID';
    if (key === 'name') return 'Name';
    if (key === 'bandType') return 'Band Type';
    if (key === 'description') return 'Description';
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => null;

  return (
    <DetailView title='Band Detail' onEdit={handleEdit} onDelete={handleDelete}>
      {isEditing ? (
        <>
          {BandSchema.map(({ inputType, key, name, options }, idx) => (
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

export default BandDetails;
