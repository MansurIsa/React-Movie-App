import React, { Component } from 'react'

export class BtnComponent extends Component {
  render() {
    return (
        <div className="right_container_button">
            <button className="right_container_actv_btn">SUBTITLE</button>
            <button>DUBLAJ</button>
            <button>CINEMA MOOD</button>
        </div>
    )
  }
}

export default BtnComponent