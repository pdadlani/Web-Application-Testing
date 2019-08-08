import React from 'react';

const Display = ({balls, strikes, outs}) => {
  return (
    <div className='display'>
      <p>{balls} - {strikes}</p>
      <p>{outs} outs</p>
    </div>
  )
}

export default Display;