import {Dialog} from '@mui/material';
import React, {useState} from 'react';
import AuthDialog from '../../components/AuthDialog/AuthDialog';
import './Main.css';

const Main = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <AuthDialog 
        open={isOpen}
      />
    </div>
  )
}
export default Main;