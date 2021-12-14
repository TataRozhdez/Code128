import React, { Component } from 'react'
import bwipjs from 'bwip-js'

import logo from './logo.svg'

class App extends Component {
  componentDidMount() {
    try {
      // The return value is the canvas element
      let canvas = bwipjs.toCanvas('mycanvas', {
        bcid: 'code128', // Barcode type
        text: '0123456789', // Text to encode
        scale: 1, // 3x scaling factor
        height: 10, // Bar height, in millimeters
        includetext: true, // Show human-readable text
        textxalign: 'center', // Always good to set this
      })
    } catch (e) {
      // `e` may be a string or Error object
    }
  }
  render() {
    return (
      <div className='App'>
        <canvas id='mycanvas'></canvas>
      </div>
    )
  }
}
export default App
