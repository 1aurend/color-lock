import React from 'react'

const Button = (props) => {
  return (
    <button className='colorbutton' style={{backgroundColor: props.color}}></button>
  )
}

export default Button
