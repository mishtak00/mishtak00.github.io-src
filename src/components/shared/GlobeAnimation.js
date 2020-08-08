import React from 'react';
import * as THREE from 'three';
import GLOBE from 'vanta/dist/vanta.globe.min';
import { Box } from '@material-ui/core';



export default class GlobeAnimation extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }
  componentDidMount() {
    this.vantaEffect = GLOBE({
        THREE: THREE,
        el: this.vantaRef.current,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x0,
        color2: 0xff0000,
        backgroundColor: 0xffffff,
        size: 0.5
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



