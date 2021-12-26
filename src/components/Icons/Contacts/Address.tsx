import React from 'react';
import {IIconProps} from '../../../constants';

const Address = ({
  width = 30,
  height = 30
}: IIconProps) => (
  <svg enableBackground="new 0 0 24 24" width={`${width}px`} height={`${height}px`} version="1.1" viewBox="0 0 24 24" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="info"></g><g id="icons"><path d="M12,0C7,0,3,4,3,9c0,6.2,3.4,11.7,8.5,14.9c0.3,0.2,0.7,0.2,1.1,0C17.6,20.6,21,15.2,21,9C21,4,17,0,12,0z M12,13   c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4s4,1.8,4,4C16,11.2,14.2,13,12,13z" id="pin"></path></g></svg>
)

export default Address;