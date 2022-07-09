import React from 'react';

const ButtonEntry = (props) => {
  console.log(props)
  return (
  <button className='style-button' id={props.id} onClick={props.onSelect}>{props.name}</button>
  )

 }

 export default ButtonEntry;