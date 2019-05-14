import React, { Component } from 'react'
import './lock.css'
import Button from './Button.js'
import Unlock from './Unlock.js'


class Lock extends Component {

  constructor() {
    super()
    this.state =
      {
        unlocked: false,
        pushed:
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
          },
        entries: [],
      }
      this.pushButton = this.pushButton.bind(this)
  }

  pushButton(id) {
    let pushed = this.state.pushed
    pushed[id] = true;
    let entries = this.state.entries
    entries.push(id)

    this.setState(
      {
        pushed: pushed,
        entries: entries
      }
    )
    console.log(this.state.entries);
  }

  componentDidUpdate() {
    let code = [2, 6, 9, 3]

    if (this.state.entries.length === 4) {
      console.log('testing ' + this.state.entries);
      console.log('against ' + code);
      if (JSON.stringify(this.state.entries) === JSON.stringify(code)) {
        this.setState({
          unlocked: true,
          entries: []
        })
        console.log('unlocked!');
      }
      else {
        console.log('still locked');
        this.setState(
          {
            entries: [],
            pushed: {
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
          }
        )
      }
    }
  }

  render() {

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
      {buttons.map(button => {
        return (<Button id={button.id} color={button.color} pushed={this.state.pushed[button.id]} key={button.id} onClick={() => this.pushButton(button.id)}/>)
      })}
      </div>
    </div>
    <Unlock unlocked={this.state.unlocked}/>
    </div>
  )
}

}

export default Lock
