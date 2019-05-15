import React from 'react'
import Button from './Button.js'
import './lock.css'

function Lock() {

  return (
    <div id='pagegrid'>
      <div id='lockcontainer'>
        <div id='lockbox'>
          <Button color='blue'/>
          <Button />
          <Button />
        </div>
      </div>
    </div>
  )

}

export default Lock
