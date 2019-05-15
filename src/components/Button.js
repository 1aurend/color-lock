import React from 'react'

const Button = (props) => {

  if (!props.pushed) {
    return (
      <button className='colorbutton' style={{backgroundColor: props.color}} onClick={props.onClick}></button>
    )
  }

  else if (props.pushed) {
    return (
      <button className='colorbutton' style={{backgroundColor: 'black'}} onClick={props.onClick}></button>
    )
  }

}

export default Button
