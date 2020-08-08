import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, IconButton } from '@material-ui/core';
import ImgMediaCard from './ImgMediaCard';
import This from '../../images/projects/this.png'
import CenterFinder from '../../images/projects/centerfinder.png'
import Correlator from '../../images/projects/correlator.png'
import Checkers from '../../images/projects/checkers.png'
import Malloc from '../../images/projects/malloc.png'
import QParser from '../../images/projects/qparser.png'
import WUN from '../../images/projects/wun.png'
import Genome from '../../images/projects/genome1.png'
import Metrics from '../../images/projects/metrics.png'
import Map from '../../images/projects/map1.png'
import Dimensions from '../../images/projects/dimensions.png'
import QSim from '../../images/projects/qsim0.png'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';



let projects = [
    {
        title: 'this.website',
        desc: 'My personal portfolio website made entirely with React and Material-UI.',
        img: This,
        hasSrc: true,
        src: 'https://github.com/mishtak00/mishtak00.github.io'
    },
    {
        title: 'CenterFinder',
        desc: 'Open-source Python package for astronomy research. Scientific publication \
        of principal use case is coming soon. Implements grid-distributed operations, \
        logic optimizations, and parallelized processes and achieves better than O(N) \
        runtime for very large galactic surveys.',
        img: CenterFinder,
        hasSrc: true,
        src: 'https://github.com/mishtak00/centerfinder'
    },
    {
        title: 'Efficient Two-Point Correlator',
        desc: 'Open-source Python package for estimating the spatial \
        two-point correlation function (Landy-Szalay estimator). Implements \
        a high-performance, binary tree-based algorithm that correctly \
        estimates the 2pcf in faster than O(logN*logM) by convolutions over \
        large probability fields rather than point-by-point.',
        img: Correlator,
        hasSrc: true,
        src: 'https://github.com/mishtak00/correlator'
    },
    {
        title: 'IntelliCheckers',
        desc: 'Java implementation of a checkers game with an intelligent \
        adversary. The backend of the AI player implements minimax adversarial \
        search, alpha-beta pruning, and move-tree ordering and balancing to \
        successfully simulate and beat a human player in real-time.',
        img: Checkers,
        hasSrc: true,
        src: 'https://github.com/mishtak00/IntelliCheckers'
    },
    {
        title: 'Quantum Computer Simulator',
        desc: 'Python implementation of a simulator for gate-based quantum computation. \
        Can apply a range of built-in and user-customized quantum gates over circuits with \
        any number of qubits and produce results that correctly simulate a quantum system. \
        Backend implements fast tensor products over real and complex variable domains.\
        \
        Picture credits: IBM',
        img: QSim,
        hasSrc: false
    },
    {
        title: 'Dynamic Memory Allocator',
        desc: 'C implementation of a dynamic memory allocator with extremely low \
        spatial segmentation and operation latency. Matches C\'s malloc package at \
        97% in overall space and time efficiency by implementing better than O(N) search \
        and strategic spatial coalescing.',
        img: Malloc,
        hasSrc: false
    },
    {
        title: 'Quantum Programs Parser',
        desc: 'Python implementation of a parser for quantum circuits in QASM-like \
        program style. The backend implements a recursive descent parser.',
        img: QParser,
        hasSrc: false
    },
    {
        title: 'World Universities Social Network Analysis',
        desc: 'Big data project that explored strengths and weaknesses of the \
        World Universities Network, comprised by the University of Rochester and \
        collaborating institutions. Served to inform on the optimization of \
        institutional resources to achieve highest reward per collaboration within \
        the network.',
        img: WUN,
        hasSrc: true,
        src: 'https://github.com/mishtak00/wun',
        hasOther: true,
        otherName: 'Writeup',
        otherSrc: 'https://docs.google.com/document/d/1DDfojLzMP0Ns8cQanmUSCWnnF1eJDvgWU4DsleGGjs8/edit'
    },
    {
        title: 'Optimal Path Finder',
        desc: 'Java implementation of a mini GPS application for New York State. \
        The backbone of the map is a graph in adjacency list representation, and \
        the backend implements Dijkstra\'s algorithm with added heuristics to solve \
        the shortest path problem between 2 points in faster than O(E*logV) average \
        case. The application overlays the graph representation over the real map of NYS \
        and fits it well by applying a Mercator transformation. The real map is \
        retrieved from Google Maps Static API live during runtime.',
        img: Map,
    },
    {
        title: 'Genome project',
        desc: 'Machine Learning project that implements dimensionality-reduction methods, \
        unsupervised learning (clustering), as well as NLP techniques in looking \
        for fine structure in genetics-related publications. Identified multiple \
        subfields that served to inform outside investor funding decisions.',
        img: Genome,
        hasSrc: true,
        src: 'https://github.com/mishtak00/genome'
    },
    {
        title: 'Scholarly Database API Wrapper',
        desc: 'Data scraping, management and integration project that consolidated \
        faculty databases held at the institutional level with online scholarly \
        databases through automated cross-checking and merging in Python. The \
        core feature is dynamic data querying and retrieval through multifunctional \
        API wrappers for Dimensions, Elsevier and Clarivate products. \
        Picture credits: Dimensions.ai',
        img: Dimensions,
        hasSrc: true,
        src: 'https://github.com/mishtak00/dimensions-scrape'
    },    
    {
        title: 'Pretty-print metrics',
        desc: 'Data wrangling project that transforms raw csv data into pdfs that are \
        nicer to look at.',
        img: Metrics,
        hasSrc: true,
        src: 'https://github.com/mishtak00/fims'
    },
];


const gridItemStyles = makeStyles((theme) => ({
    gridItem: {
        maxWidth: 340, 
        marginBottom: theme.spacing(3)
    },
    gridItemBottom: {
        maxWidth: 340,
    },
    // LOCKED DONT TOUCH
    projectGrid: {
        position: 'relative',
        top: 300,
        width: '100vw'
    },
    projectGridHeaderBox: {
        background: '#ffffff', 
        width: '100vh', 
        // paddingTop: theme.spacing(3),
        // paddingBottom: theme.spacing(3)
    },
    projectGridHeader: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
    }
}));


export default function ProjectGrid() {
    var gridCols = [[],[],[],[]];
    const classes = gridItemStyles();

    // this is to get correct margin of bottom element
    // of grid items that are at the bottom of
    // grid columns, a correction for mobile view
    let projListLen = projects.length;
    let colListLen = gridCols.length;
    let bottomStartIndex = projListLen - colListLen;

    projects.forEach((project, i) => {
        gridCols[i % gridCols.length].push(
            <Grid key={i} item xs={12} 
            className={i<bottomStartIndex ? classes.gridItem : classes.gridItemBottom}>
                <ImgMediaCard content={project} />
            </Grid>
            );
    });
    
    return (
        <div>
            <Grid container justify='center' spacing={3} className={classes.projectGrid}>

                <Grid item xs={12} align='center' className={classes.projectGridHeaderBox}>
                    <Grid item xs={12} md={10} align='left' className={classes.projectGridHeader}>
                        
                        <Grid container>
                            <Grid item style={{marginTop: 8}}>
                                <Typography variant='h5'>
                                    For a complete list of college-level courses I've taken,
                                    please visit my LinkedIn profile at    
                                </Typography>
                            </Grid>
                            <Grid item >
                                <IconButton href='https://www.linkedin.com/in/gebrimishtaku/' target='_blank'>
                                    <LinkedInIcon style={{color: '#0e76a8'}} />
                                </IconButton>
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid item style={{marginTop: 8}}>
                                <Typography variant='h5'>
                                    You can also visit my GitHub page for all my open-source projects at
                                </Typography>
                            </Grid>
                            <Grid item >
                                <IconButton href='https://www.github.com/mishtak00/' target='_blank'>
                                    <GitHubIcon style={{color: '#171515'}}/>
                                </IconButton>
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid item style={{marginTop: 8}}>
                                <Typography variant='h5'>
                                The following list features some personal projects and others from 
                                work and class that I find pretty cool :) 
                                </Typography>
                            </Grid>
                        </Grid>
                        
                    </Grid>
                </Grid>

                <Grid container justify='center' spacing={3} style={{width: '100vw', marginTop: 50}}>
                {gridCols.map((column, i) => (
                    <Grid key={i} item> {column} </Grid>
                ))}
                </Grid>
                
                

            </Grid>
        </div>
    );
};


