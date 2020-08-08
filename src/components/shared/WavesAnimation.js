import React from 'react';
import * as THREE from 'three';
import WAVES from 'vanta/dist/vanta.waves.min';
import { Box } from '@material-ui/core';



export default class WavesAnimation extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }
  componentDidMount() {
    this.vantaEffect = WAVES({
        THREE: THREE,
        el: this.vantaRef.current,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00
      })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }
  render() {
    return (
      <Box 
      ref={this.vantaRef} 
      style={{
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        zIndex: 0.1
        }}>
      </Box>
    );
  }
}



