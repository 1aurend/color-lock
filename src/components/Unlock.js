import React from 'react'

function Unlock (props) {

  if (props.unlocked === false) {
    return <></>
  }
  else {
    return (
      <div id='success'>
        <h2>Success!</h2>
        <iframe src="https://giphy.com/embed/4xpB3eE00FfBm" width="240" height="229" frameBorder="0" allowFullScreen title='baby success'></iframe>
      </div>
    )
  }

  }

export default Unlock
