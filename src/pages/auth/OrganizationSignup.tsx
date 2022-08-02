import React, { useState } from 'react';
import { Box, Step, StepButton, Stepper } from '@mui/material';
import { AuthWrapper } from '../../core-ui';
import CreateOrganization from '../../core-ui/auth/CreateOrganization';
import {
  getOrganisationSchema,
  getOrganisationContactSchema,
} from '../app/schema/ModelSchema';
import SelectModule from '../../core-ui/auth/SelectModule';

const steps = ['Organization', 'Contact ', 'Modules', 'Admin'];

const STEP_ORGANISATION = 0;
const STEP_ADDRESS = 1;
const STEP_MODULES = 2;
const STEP_EMPLOYEE = 3;

const OrganizationSignup = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  return (
    <AuthWrapper paragraph='Signup here as an organization'>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={activeStep > index}>
            <StepButton color='inherit' onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <form>
        {activeStep === STEP_ORGANISATION && (
          <CreateOrganization schema={getOrganisationSchema()} />
        )}
        {activeStep === STEP_ADDRESS && (
          <CreateOrganization schema={getOrganisationContactSchema({})} />
        )}
        {activeStep === STEP_MODULES && <SelectModule />}
        {activeStep === STEP_EMPLOYEE && (
          <AddAdmin adminEmployee={createdAdminEmployee} />
        )}
      </form>
    </AuthWrapper>
  );
};

export default OrganizationSignup;
