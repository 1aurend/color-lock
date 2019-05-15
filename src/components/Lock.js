import React from 'react'
import Button from './Button.js'
import './lock.css'

function Lock() {

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

  return (
    <div id='pagegrid'>
    <div id='locktitle'>
      <h2>Enter the code...</h2>
    </div>
      <div id='lockcontainer'>
        <div id='lockbox'>
          {buttons.map(button => {return (<Button id={button.id} color={button.color} />)})}
        </div>
      </div>
    </div>
  )

}

export default Lock
