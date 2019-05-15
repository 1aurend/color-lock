import React from 'react'

const Button = (props) => {
  return (
    <button className='colorbutton' style={{backgroundColor: props.color}}>I'm a button</button>
  )
}

export default Button
