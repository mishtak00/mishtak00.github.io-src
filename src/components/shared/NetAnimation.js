import React from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';
import { Box } from '@material-ui/core';



export default class NetAnimation extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }
  componentDidMount() {
    this.vantaEffect = NET({
      THREE: THREE,
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x0,
      backgroundColor: 0xffffff,
      points: 20.0,
      spacing: 17.0,
      maxDistance: 21.00
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
        }}>
      </Box>
    );
  }
}



