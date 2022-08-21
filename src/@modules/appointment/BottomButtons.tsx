import React from 'react';
import { Button } from '../../components';
interface BottomButtonsProps {
  onAttendToClick: () => void;
}

const BottomButtons: React.FC<BottomButtonsProps> = ({ onAttendToClick }) => {
  return (
    <>
      <Button label={'Edit Appointment Details'} background={'#04ed7c'} />
      <Button label='Attend to Client' onClick={onAttendToClick} />
      <Button
        label={'Delete Appointment'}
        background={'#ff0000'}
        color={'#fff'}
      />
    </>
  );
};

export default BottomButtons;
