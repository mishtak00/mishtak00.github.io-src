import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
	maxWidth: 340
  },
});

const bottomLinks = ((content) => {
	return (
			(
				content.hasSrc===true 
				?
				(
				<CardActions>
					<Button size="small" color="primary" href={content.src} target='_blank'>
						Source Code
					</Button>
					{content.hasOther===true 
					? 	<Button size="small" color="primary" href={content.otherSrc} target='_blank'>
							{content.otherName}
						</Button>
					: <></>}
				</CardActions>
				)
				:
				content.hasOther===true
				?
				<CardActions>
					<Button size="small" color="primary" href={content.otherSrc} target='_blank'>
						{content.otherName}
					</Button>
				</CardActions>
				:
				<></>
			)
	);
});

export default function ImgMediaCard(projectProps) {
  const classes = useStyles();
  const content = projectProps.content
  return (
	<Card className={classes.root}>

	  <CardActionArea>
		
		<CardMedia
			component="img"
			alt={content.title}
			// height="300"
			image={content.img}
			title={content.title}
		/>

		<CardContent>
		  <Typography gutterBottom variant="h5" component="h2">
			{content.title}
		  </Typography>
		  <Typography variant="body2" color="textSecondary" component="p">
			{content.desc}
		  </Typography>
		</CardContent>

	  </CardActionArea>

	  {bottomLinks(content)}

	</Card>
  );
}
