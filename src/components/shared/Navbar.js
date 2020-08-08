import React from 'react'
import { Link } from 'react-router-dom'
import { 
    AppBar, 
    Toolbar,
    IconButton,
    Avatar,
    Typography,
    Box,
	Button,
	makeStyles
} from '@material-ui/core'
import GMIcon from '../../images/gm-icon.png'



const useStyles = makeStyles(() => ({
	navbarIconStyle: {
		flex: 1
	}
}));

const Navbar = ((pos) => {
	const classes = useStyles();
    return (
		<Box component='nav'>
			<AppBar position={pos.pos} color='transparent'>
				<Toolbar>
					<Box className={classes.navbarIconStyle}>
						<IconButton component={Link} to={'/'}>
							<Avatar src={GMIcon} alt='Gebri Mishtaku' />
						</IconButton>
					</Box>
					<Box>
						<Button component={Link} to={'/about-me'}>
							<Typography>About me</Typography>
						</Button>
						<Button component={Link} to={'/projects'}>
							<Typography>Projects</Typography>
						</Button>
						<Button component={Link} to={'/contact'}>
							<Typography>Contact</Typography>
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
    );
});


export default Navbar;
