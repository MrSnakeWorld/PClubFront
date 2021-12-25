import React from 'react';
import {Button} from '@mui/material';

interface IActionButtonsProps {
  handleCancel: () => void;
  handleConfirm: () => void;
}

const ActionButtons = ({
  handleCancel,
  handleConfirm
}: IActionButtonsProps) => {
  return (
    <div className="action-buttons">
      <Button 
        className="action-buttons cancel"
        onClick={handleCancel}
      > 
        Отмена 
      </Button>
      <Button 
        className="action-buttons confirm"
        onClick={handleConfirm}
      >
        Подвердить 
      </Button>
    </div>
  )
}

export default ActionButtons;