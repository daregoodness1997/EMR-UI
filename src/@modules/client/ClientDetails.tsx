import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailView from '../../@views/DetailView';
import { ButtonGroup, GrayWrapper, HeadWrapper } from '../../@views/styles';
import { Button } from '../../components';
import DynamicInput from '../../components/Inputs/DynamicInput';
import { DetailsWrapper } from '../../components/styles';
import { DashboardPageWrapper, GridWrapper } from '../../core-ui/styles';
import { clientsList } from '../../utils/data';
import { ClientFullSchema, ClientSchema } from '../../utils/schema';

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

  console.log(ClientFullSchema.names);

  return (
    <DashboardPageWrapper>
      {/* {keys.map((key, idx) => {
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
      })} */}
      <GrayWrapper>
        <HeadWrapper>
          <Box>
            <Typography variant='h2'>
              {`${details[0].firstname} ${details[0].lastname}`} Details
            </Typography>
            <Typography>
              Below are your {`${details[0].firstname} ${details[0].lastname}`}{' '}
              details
            </Typography>
          </Box>

          <ButtonGroup>
            <Button
              label={'Delete'}
              background='#FFE9E9'
              color='#ED0423'
              showicon={true}
              icon='bi bi-pen-fill'
              // onClick={onDelete}
            />
            <Button
              label={`${isEditing ? 'Cancel Editing' : 'Edit Details'}`}
              background={'#ECF3FF'}
              color='#0364FF'
              showicon={true}
              icon='bi bi-pen-fill'
              onClick={() => setIsEditing(!isEditing)}
            />
          </ButtonGroup>
        </HeadWrapper>
        <DetailsWrapper title='Names'>
          <GridWrapper>
            {ClientFullSchema.names.map(({ inputType, key, name }) => {
              return (
                <>
                  {isEditing ? (
                    <DynamicInput
                      key={key}
                      label={name}
                      name={key}
                      value={details[0][key]}
                      inputType={inputType}
                    />
                  ) : (
                    <Box key={key}>
                      <label>{name}</label>
                      <Typography variant='body2'>{`${details[0][key]}`}</Typography>
                    </Box>
                  )}
                </>
              );
            })}
          </GridWrapper>
        </DetailsWrapper>
        <DetailsWrapper title='Biodata'>
          <GridWrapper>
            {ClientFullSchema.biodata.map(({ inputType, key, name }) => {
              return (
                <>
                  {isEditing ? (
                    <DynamicInput
                      key={key}
                      label={name}
                      name={key}
                      value={details[0][key]}
                      inputType={inputType}
                    />
                  ) : (
                    <Box key={key}>
                      <label>{name}</label>
                      <Typography variant='body2'>{`${details[0][key]}`}</Typography>
                    </Box>
                  )}
                </>
              );
            })}
          </GridWrapper>
        </DetailsWrapper>

        <DetailsWrapper title='Address'>
          <GridWrapper>
            {ClientFullSchema.address.map(({ inputType, key, name }) => {
              return (
                <>
                  {isEditing ? (
                    <DynamicInput
                      key={key}
                      label={name}
                      name={key}
                      value={details[0][key]}
                      inputType={inputType}
                    />
                  ) : (
                    <Box key={key}>
                      <label>{name}</label>
                      <Typography variant='body2'>{`${details[0][key]}`}</Typography>
                    </Box>
                  )}
                </>
              );
            })}
          </GridWrapper>
        </DetailsWrapper>

        <DetailsWrapper title='Other Details'>
          <GridWrapper>
            {ClientFullSchema.otherDetails.map(({ inputType, key, name }) => {
              return (
                <>
                  {isEditing ? (
                    <DynamicInput
                      key={key}
                      label={name}
                      name={key}
                      value={details[0][key]}
                      inputType={inputType}
                    />
                  ) : (
                    <Box key={key}>
                      <label>{name}</label>
                      <Typography variant='body2'>{`${details[0][key]}`}</Typography>
                    </Box>
                  )}
                </>
              );
            })}
          </GridWrapper>
        </DetailsWrapper>
        <DetailsWrapper title='Next of Kin'>
          <GridWrapper>
            {ClientFullSchema.nextOfKin.map(({ inputType, key, name }) => {
              return (
                <>
                  {isEditing ? (
                    <DynamicInput
                      key={key}
                      label={name}
                      name={key}
                      value={details[0][key]}
                      inputType={inputType}
                    />
                  ) : (
                    <Box key={key}>
                      <label>{name}</label>
                      <Typography variant='body2'>{`${details[0][key]}`}</Typography>
                    </Box>
                  )}
                </>
              );
            })}
          </GridWrapper>
        </DetailsWrapper>
        <DetailsWrapper title='Non-Hospital Indentifers'>
          <GridWrapper>
            {ClientFullSchema.nonHospitalIndetifiers.map(
              ({ inputType, key, name }) => {
                return (
                  <>
                    {isEditing ? (
                      <DynamicInput
                        key={key}
                        label={name}
                        name={key}
                        value={details[0][key]}
                        inputType={inputType}
                      />
                    ) : (
                      <Box key={key}>
                        <label>{name}</label>
                        <Typography variant='body2'>{`${details[0][key]}`}</Typography>
                      </Box>
                    )}
                  </>
                );
              }
            )}
          </GridWrapper>
        </DetailsWrapper>
        <DetailsWrapper title='Payment Information'>
          <GridWrapper>
            {ClientFullSchema.paymentInformation.map(
              ({ inputType, key, name }) => {
                return (
                  <>
                    {isEditing ? (
                      <DynamicInput
                        key={key}
                        label={name}
                        name={key}
                        value={details[0][key]}
                        inputType={inputType}
                      />
                    ) : (
                      <Box key={key}>
                        <label>{name}</label>
                        <Typography variant='body2'>{`${details[0][key]}`}</Typography>
                      </Box>
                    )}
                  </>
                );
              }
            )}
          </GridWrapper>
        </DetailsWrapper>

        <DetailsWrapper title='Medical Data'>
          <GridWrapper>
            {ClientFullSchema.medicalData.map(({ inputType, key, name }) => {
              return (
                <>
                  {isEditing ? (
                    <DynamicInput
                      key={key}
                      label={name}
                      name={key}
                      value={details[0][key]}
                      inputType={inputType}
                    />
                  ) : (
                    <Box key={key}>
                      <label>{name}</label>
                      <Typography variant='body2'>{`${details[0][key]}`}</Typography>
                    </Box>
                  )}
                </>
              );
            })}
          </GridWrapper>
        </DetailsWrapper>
      </GrayWrapper>
    </DashboardPageWrapper>
  );
};

export default ClientDetails;
