import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Avatar, Grid, Box } from '@material-ui/core'
import Bitmoji from '../../images/bitmoji.jpeg'
import Typed from 'react-typed'



const useStyles = makeStyles((theme) => ({
    avatar: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        margin: theme.spacing(1)
    },
    subtitle: {
        color: '#660000'
    },
    centerBox: {
        position: 'absolute',
        top: '30%',
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
                <Avatar className={classes.avatar} src={Bitmoji} alt='Gebri Mishtaku' />
            </Grid>
            <Typography variant='h2'>
                <Typed strings={["Hi, I'm Gebri!"]} typeSpeed={25} showCursor={false}/>
            </Typography>
            <Typography className={classes.subtitle} variant='h5'>
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
            </Typography>
        </Box>
    );
}

export default Header;

