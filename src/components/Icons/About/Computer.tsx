import React from 'react';
import {IIconProps} from '../../../constants';

const Computer = ({
  height = 200,
  width = 200
}: IIconProps) => (
  <svg enableBackground="new 0 0 48 48" height={`${height}px`} version="1.1" viewBox="0 0 48 48" width={`${width}px`} xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="Expanded"><g><g><path d="M44,42H4c-2.206,0-4-1.874-4-4.177V8.177C0,5.874,1.794,4,4,4h40c2.206,0,4,1.874,4,4.177v29.646     C48,40.126,46.206,42,44,42z M4,6C2.897,6,2,6.977,2,8.177v29.646C2,39.023,2.897,40,4,40h40c1.103,0,2-0.977,2-2.177V8.177     C46,6.977,45.103,6,44,6H4z"></path></g><g><path d="M38,46H10c-0.552,0-1-0.448-1-1s0.448-1,1-1h28c0.552,0,1,0.448,1,1S38.552,46,38,46z"></path></g><g><path d="M24,46c-0.552,0-1-0.448-1-1v-4c0-0.552,0.448-1,1-1s1,0.448,1,1v4C25,45.552,24.552,46,24,46z"></path></g><g><circle cx="24" cy="37" r="2"></circle></g><g><rect height="2" width="46" x="1" y="32"></rect></g></g></g></svg>
);

export default Computer;