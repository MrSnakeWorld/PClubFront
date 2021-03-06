import React from 'react';
import {IIconProps} from '../../../constants';

const Persons = ({
  width = 30,
  height = 30
}: IIconProps) => (
  <svg id="Слой_1" viewBox="0 0 128 128" width={`${width}px`} height={`${height}px`} xmlns="http://www.w3.org/2000/svg"><title></title><circle cx="102" cy="53.02" r="12.98"></circle><circle cx="26" cy="53.02" r="12.98"></circle><path d="M34.6,79.23l0,0q-.43.61-.84,1.24l0,0A35.82,35.82,0,0,0,28,100h72a35.82,35.82,0,0,0-5.71-19.44l0,0q-.41-.63-.84-1.24l0,0a36,36,0,0,0-58.8,0Z"></path><path d="M0,92H20.74A44,44,0,0,1,34.46,67.42,26,26,0,0,0,0,92Z"></path><circle cx="64" cy="46.03" r="17.97"></circle><path d="M102,66a26,26,0,0,0-8.46,1.42A44,44,0,0,1,107.26,92H128A26,26,0,0,0,102,66Z"></path></svg>
)

export default Persons;