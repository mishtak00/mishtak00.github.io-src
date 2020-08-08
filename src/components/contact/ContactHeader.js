import React from 'react'
import { Typography, Avatar, Grid, Box, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Professional from '../../images/professional.jpeg'
import Typed from 'react-typed'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';



const useStyles = makeStyles((theme) => ({
    avatar: {
        width: '30vh',
        height: '30vh',
        margin: theme.spacing(1)
    },
    subtitle: {
        color: '#660000'
    },
    centerBox: {
        position: 'absolute',
        top: '25%',
        width: '100vw',
        textAlign: 'center',
        zIndex: 1
    }
}))

const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.centerBox}>
            <Grid container justify='center'>
                <Avatar className={classes.avatar} src={Professional} alt='Gebri Mishtaku' />
            </Grid>
            <Typography variant='h2'>
                <Typed strings={["Connect with me to chat!"]} typeSpeed={25} />
            </Typography>
            <Grid container justify='center'>
                <IconButton href='https://www.facebook.com/gebri.mishtaku/' target='_blank'>
                    <FacebookIcon fontSize='large' style={{color: '#000000'}} />
                </IconButton>
                <IconButton href='https://www.instagram.com/gebrimishtaku/' target='_blank'>
                    <InstagramIcon fontSize='large' style={{color: '#000000'}} />
                </IconButton>
                <IconButton href='https://www.linkedin.com/in/gebrimishtaku/' target='_blank'>
                    <LinkedInIcon fontSize='large' style={{color: '#000000'}} />
                </IconButton>
                <IconButton href='https://github.com/mishtak00/' target='_blank'>
                    <GitHubIcon fontSize='large' style={{color: '#000000'}} />
                </IconButton>
            </Grid>
            {/* <Typography className={classes.subtitle} variant='h5'>
                <Typed 
                // showCursor={false}
                // startDelay={2650}
                strings={[
                    "I'm a Software Engineer",
                    "I'm a Full Stack Developer",
                    "I'm a Quantum Programmer"
                ]} 
                typeSpeed={25}
                backSpeed={20}
                loop
                // shuffle
                />
            </Typography> */}
        </Box>
    );
}

export default Header;

