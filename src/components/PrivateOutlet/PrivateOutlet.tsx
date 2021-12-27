import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';

const PrivateOutlet = ({isAllowed}: any) => {
  return isAllowed ? <Outlet/> : <Navigate to="/" />
}

export default PrivateOutlet;