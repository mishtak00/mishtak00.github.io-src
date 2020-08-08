import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../shared/Navbar';
import GlobeAnimation from '../shared/GlobeAnimation'
import ProjectGrid from './ProjectGrid';



const useStyles = makeStyles((theme) => ({
    background: {
        background: '#c33764',  /* fallback for old browsers */
        background: '-webkit-linear-gradient(to right, #c33764, #1d2671)',  /* Chrome 10-25, Safari 5.1-6 */
        background: 'linear-gradient(to right, #c33764, #1d2671)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    },
    // LOCKED DONT TOUCH
    textBox: {
        position: 'relative',
        top: '20vh',
        width: '100vw',
        zIndex: 1
    }
}));

export default function Projects() {
  const classes = useStyles();
  const subFontSize = 'h6';

  return (
      <div>

        <div className={classes.background} 
        style={{position: 'fixed', height: '35vh', width: '100vw'}} />

        <Navbar pos='absolute' />

        <GlobeAnimation />

        <Grid container justify='center' className={classes.textBox}>

            <Grid item xs={10}>
                <Typography variant='h1'>
                    Skills & Projects
                </Typography>
            </Grid>
            <Grid item xs={10}>
                <Typography variant='h4'>
                    <br/>
                    I'm ready to hit the ground running with
                </Typography>
            </Grid>
            <Grid item xs={10}>
                <Typography variant={subFontSize}>
                    Classic stack: Python | Java | C | Bash
                </Typography>
            </Grid>
            <Grid item xs={10}>
                <Typography variant={subFontSize}>
                    Web stack: HTML | CSS | JavaScript | React | SQL | REST API
                </Typography>
            </Grid>
            <Grid item xs={10}>
                <Typography variant={subFontSize}>
                    Quantum stack: Qiskit | QASM
                </Typography>
            </Grid>

            
            <Grid item xs={10}>
                <Typography variant='h4'>
                    <br/>
                    Tech I’m familiar with and learning more about
                </Typography>
            </Grid>
            <Grid item xs={10}>
                <Typography variant={subFontSize}>
                    AWS | Google Cloud | Docker | Flutter | AWS Braket
                </Typography>
            </Grid>

            <Grid item xs={10}>
                <Typography variant='h4'>
                    <br/>
                    Ancillary software engineering knowledge
                </Typography>
            </Grid>
            <Grid item xs={10}>
                <Typography variant={subFontSize} style={{maxWidth: 600}}>
                    git and GitHub version control | debugging tools | unit
                    and system testing | Agile development | complete Software Development
                    Life Cycle | Mac, Windows, Linux environments
                </Typography>
            </Grid>
            
            <ProjectGrid />

        </Grid>

        <div className={classes.background} 
        style={{position:'relative', top: 530, height: '7vh'}} />

    </div>
  );
}

