import React, { useState, useEffect } from 'react'
import Button from './Button.js'
import './lock.css'

function Lock() {

  const [pressed, onPress] = useState(
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
  const [unlocked, itsOpen] = useState(false)
  const [entries, addEntry] = useState([])

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

    useEffect(() => {
      let code = [1, 2]
      console.log(JSON.stringify(code))
      console.log(JSON.stringify(entries));
      if (JSON.stringify(code) === JSON.stringify(entries)) {
        itsOpen(true)
      }
    }, [entries])

  if (!unlocked) {
    return (
      <div id='pagegrid'>
      <div id='locktitle'>
        <h2>Enter the code...</h2>
      </div>
        <div id='lockcontainer'>
          <div id='lockbox'>
            {buttons.map(button => {return (<Button key={button.id} color={button.color} onClick={() => {
              onPress((pressed) => ({...pressed, [button.id]: true}))
              console.log(pressed);
              addEntry([...entries, button.id])
              console.log(entries);
            }} pressed={pressed[button.id]} />)})}
          </div>
        </div>
      </div>
    )

  }
  else if (unlocked) {
    return (
      <div id='pagegrid'>
      <div id='locktitle'>
        <h2>Success!</h2>
      </div>
        <div id='lockcontainer'>
          <div id='lockbox'>
            {buttons.map(button => {return (<Button key={button.id} color={button.color} onClick={() => {
              onPress((pressed) => ({...pressed, [button.id]: true}))
              console.log(pressed);
              addEntry([...entries, button.id])
              console.log(entries);
            }} pressed={pressed[button.id]} />)})}
          </div>
        </div>
          <div id='success'>
            <iframe src="https://giphy.com/embed/4xpB3eE00FfBm" width="240" height="229" frameBorder="0" allowFullScreen title='baby success'></iframe>
        </div>
      </div>
    )
  }

}

export default Lock
