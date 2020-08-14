import React from 'react';
import { Container, Grid, Avatar, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../shared/Navbar';
import Berlin from '../../images/berlin.jpeg'
import Profile from '../../images/profile.jpeg'
import Beach from '../../images/beach.jpeg'
import NetAnimation from '../shared/NetAnimation'



let elevatorPitch = 
`
My name is Gebri Mishtaku and I am an aspiring software engineer and entrepreneur with great interest in new 
quantum tech. I am currently a rising senior at the University of Rochester in Rochester, NY, where I’m double 
majoring in Computer Science and Physics. I am a great problem solver because my extended technical background 
allows me to navigate different complexity levels comfortably and with intellectual ease, but that’s not all I 
bring to the table. My biggest asset is the breadth of my worldly experience. My diverse history has given me 
the opportunity to grow up to be more people-oriented than the average technical person. It is due to this that 
I believe that the hardest part of any problem is the human component.
`;
let life1 = 
`
I consider myself blessed to have been raised with all the intellectual freedom I could ever ask for. 
One of the earliest memories I have of myself thriving among this curious freedom is when I set the tablecloth 
on fire as a toddler. The physical transformation that I thought would happen was so exiting to me, so 
I lit it up! My mom brushed it off with a smile as if I had been pushed by childish whim to do it, but no, no, 
I'm substantially older now and she knows I'm the most curious I've ever been.
`;
let life2 = 
`
Luckily for us, that incident concluded my adventures as a delinquent kid just on time for the introduction 
of my newest favorite toys: computers. Granted, at first I was just curious about which pipes in Mario were 
secret passages, but as I grew up I started wondering how could it be that I controlled Mario to my volition 
just by pressing some buttons. How did this rugged Italian plumber even exist on the palm of my hands?
`;
let life3 = 
`
I must’ve been around 11 when I wrote my very first program – and in C++ of all languages, whewww. I remember 
it was a simple main with loops and control flow statements, which was my way of making a teletype game. The 
first and only user of that very boring app was my little brother. He was just so happy to read his name on 
the screen when the results of his choices would print out, and I was just so happy within that moment. 
Through the art of coding, I found awe.
`;
let life4 =
`
During my late teens, I was lucky enough to be part of the Eastern Mediterranean International School in Israel. 
In my time there, I furthered my appreciation for technology and its use on advancing the human race towards a 
brighter and more peaceful future. My interests matured and diversified as I lived my years to the fullest with 
people that were as crazy and committed to finding truth in how the world works as I am.
`;
let life5 = 
`
By the age of 20, I had lived on 3 different continents and had made friends from 6 of them. 
`;
let free1 = 
`
Apart from hacking away at code, I love the thrill in learning and doing new things and taking calculated risks. 
one of my biggest hobbies is managing my own long-term equities portfolio. I really enjoy trading on the stock 
market as well: day trading, swing trading, you name it! I usually prefer tech stocks. Invest in what you know, right? 
`;
let free2 = 
`
I also love to travel around, especially to places with beautiful beaches. If I’d have to choose an environment 
to spend the rest of my life in, it would definitely be a beach or somewhere very near it. Some of my favorite 
books of all time are The Alchemist, The Richest Man in Babylon, and the Hebrew Bible.
`;
let free3 = 
`
Some simple things in life that I really enjoy are hanging out with friends and family, working out, eating 
healthy and trying out new food. Some big ideas that I like to ponder are space travel, our place in the universe, 
other intelligent life, theories of artificial intelligence, and of course, politics. 
`;

const useStyles = makeStyles((theme) => ({
    background: {
        background: '#c33764',  /* fallback for old browsers */
        background: '-webkit-linear-gradient(to right, #c33764, #1d2671)',  /* Chrome 10-25, Safari 5.1-6 */
        background: 'linear-gradient(to right, #c33764, #1d2671)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        // background: 'linear-gradient(to right, #c31432, #240b36)',
        // background: 'linear-gradient(to right, #3A1C71, #D76D77, #FFAF7B)',
        // background: 'linear-gradient(to right, #fcb045, #fd1d1d, #833ab4)',
        width: '100vw'
    },
    container: {
        position: 'relative',
        top: '10vh'
    },
    paper: {
        padding: theme.spacing(3),
        paddingBottom: theme.spacing(1),
        textAlign: 'left',
    },
    avatar: {

        width: '30vh',
        height: '30vh',
        // height: theme.spacing(39),
        // width: theme.spacing(39),
        marginTop: theme.spacing(1)
    },
    gridItem: {
        margin: 10
    },
    p: {
        marginTop: 10,
        marginBottom: 10
    }
}));

export default function AboutMe() {
  const classes = useStyles();
  return (
      <div>

        <div className={classes.background} style={{position: 'fixed', height: '35vh'}} />

        <NetAnimation />

        <Navbar pos='absolute' />

        <Container className={classes.container}>
            <Grid container spacing={3}>

                <Grid container justify='center'>

                    <Grid item className={classes.gridItem}>
                        <Avatar src={Profile} alt='Gebri Mishtaku' className={classes.avatar} />
                    </Grid>
                    
                    <Grid item xs={10} zeroMinWidth className={classes.gridItem}>
                        <Paper className={classes.paper} >
                            <Typography variant='h5'>
                                Elevator pitch
                            </Typography>
                            <Typography className={classes.p}>
                                {elevatorPitch}
                            </Typography>
                        </Paper>
                    </Grid>


                    <Grid container justify='center'>

                        <Grid item xs={10} md={8} zeroMinWidth className={classes.gridItem}>
                            <Paper className={classes.paper}>
                                <Typography variant='h5'>
                                    My life growing up
                                </Typography>
                                <Typography className={classes.p}>{life1}</Typography>
                                <Typography className={classes.p}>{life2}</Typography>
                                <Typography className={classes.p}>{life3}</Typography>
                                <Typography className={classes.p}>{life4}</Typography>
                                <Typography className={classes.p}>{life5}</Typography>
                            </Paper>
                        </Grid>

                        <Grid item md={2}>
                            <Avatar src={Berlin} alt='Gebri Mishtaku' className={classes.avatar} />
                        </Grid>

                    </Grid>


                    <Grid container justify='center'>

                        <Grid item>
                            <Avatar src={Beach} alt='Gebri Mishtaku' className={classes.avatar} />
                        </Grid>

                        <Grid item xs={10} md={8} zeroMinWidth className={classes.gridItem}>
                            <Paper className={classes.paper}>
                                <Typography variant='h5'>
                                    In my free time
                                </Typography>
                                <Typography className={classes.p}>{free1}</Typography>
                                <Typography className={classes.p}>{free2}</Typography>
                                <Typography className={classes.p}>{free3}</Typography>
                            </Paper>
                        </Grid>

                    </Grid>

                </Grid>
                
            </Grid>
        </Container>


        <div className={classes.background} style={{position:'relative', top: '12.5vh', height: '7vh', }} />


    </div>
  );
}




