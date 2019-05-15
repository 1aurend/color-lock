import React, { useState } from 'react'
import Button from './Button.js'
import './lock.css'

function Lock() {

  const [pushed, onPush] = useState(
    {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
    }
  )

  const buttons = [
      {id: 1, color: '#512DA8',},
      {id: 2, color: '#FFC107',},
      {id: 3, color: '#E91E63',},
      {id: 4, color: '#C2185B',},
      {id: 5, color: '#2196F3',},
      {id: 6, color: '#4CAF50',},
      {id: 7, color: '#CDDC39',},
      {id: 8, color: '#FF5722',},
      {id: 9, color: '#00BCD4',},
    ]
if (true) {
  return (
    <div id='pagegrid'>
    <div id='locktitle'>
      <h2>Enter the code...</h2>
    </div>
      <div id='lockcontainer'>
        <div id='lockbox'>
          {buttons.map(button => {return (<Button key={button.id} color={button.color} onClick={() => {
            onPush((pushed) => ({...pushed, [button.id]: true}))
            console.log(pushed);
          }} pushed={pushed[button.id]} />)})}
        </div>
      </div>
    </div>
  )
}
else {
  return (
    <h2>hey hey</h2>
  )
}


}

export default Lock
