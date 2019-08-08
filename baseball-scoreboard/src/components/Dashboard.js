import React, { useState } from 'react';
import Display from './Display.js';

const Dashboard = () => {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  const [outs, setOuts] = useState(0);

  const handleStrike = () => {
    // console.log('before handleStrike ball', balls, 'strikes', strikes)
    if (strikes < 2) {
      setStrikes(strikes + 1)
      // console.log('after handleStrike ball', balls, 'strikes', strikes)
    } else {
      setStrikes(0);
      setBalls(0);
      handleOuts();
      // console.log('after handleStrike ball', balls, 'strikes', strikes)
    }
  }

  const handleBall = () => {
    // console.log('before HandleBall ball', balls, 'strikes', strikes)
    if (balls < 3) {
      setBalls(balls + 1);
      // console.log('after handleBall ball', balls, 'strikes', strikes)
    } else {
      setBalls(0);
      setStrikes(0);
      // console.log('after handleBall ball', balls, 'strikes', strikes)
    }
  }

  const handleFoul = () => {
    // console.log('before handleFoul ball', balls, 'strikes', strikes)
    if (strikes < 2) {
      setStrikes(strikes + 1);
      // console.log('after handleFoul ball', balls, 'strikes', strikes)

    }
  }

  const handleHit = () => {
    // console.log('before handleHit ball', balls, 'strikes', strikes)
    setStrikes(0);
    setBalls(0);
    // console.log('after handleHit ball', balls, 'strikes', strikes)
  }

  const handleOuts = () => {
    if (outs < 2 ) {
      setOuts(outs + 1);
    } else {
      setOuts(0);
    }
  }

  return (
    <div className='dashboard'>
      <Display strikes={strikes} balls={balls} outs={outs} />
      <button onClick={handleStrike}>Strike</button>
      <button onClick={handleBall}>Ball</button>
      <button onClick={handleFoul}>Foul</button>
      <button onClick={handleHit}>Hit</button>
    </div>
  )
}

export default Dashboard;