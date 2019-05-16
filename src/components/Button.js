import React from 'react'

const Button = (props) => {

  if (!props.pressed) {
    return (
      <button className='colorbutton' style={{backgroundColor: props.color}} onClick={props.onClick}></button>
    )
  }

  else if (props.pressed) {
    return (
      <button className='colorbutton' style={{border: '5px solid white', backgroundColor: props.color}} onClick={props.onClick}></button>
    )
  }

}

export default Button
