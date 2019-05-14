import React from 'react'

function Button (props) {
  if (!props.pushed) {
    return (
      <button className="colorbutton" key={props.id} style={{backgroundColor: props.color}} onClick={props.onClick}></button>
    )
  }
  else if (props.pushed) {
    return (
      <button className="colorbutton" key={props.id} style={{backgroundColor: props.color, border: '5px solid white'}} onClick={props.onClick}></button>
    )
  }

}

export default Button
