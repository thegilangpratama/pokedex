import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {
  Link
} from 'react-router-dom';

import Types from './Types';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 240,
    margin: '.5rem'
  },
  media: {
    height: 140,
    backgroundSize: 'contain'
  },
});


export default function PreviewCard({ pokemon }) {
  const button = () => {
    console.log('Hehe');
  }

  const classes = useStyles();

  const { id, name, types } = pokemon;
  const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={sprite}
        />
        <Grid container item xs={12} justify="space-evenly">
          <Button size="small" variant="outlined" color="primary">
            <Link to={`/pokemon/${id}`}>View</Link>
          </Button>
          <Button size="small" onClick={button} variant="outlined" color="secondary">
            Catch
          </Button>
        </Grid>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          {types ? <Types types={types} /> : ''}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

// Loop through object sprites and return first existing image
//function getSprite(sprites) {
//  const keys = Object.keys(sprites);
//  const values = Object.values(sprites);
//  for (let i = keys.length; i > 0; i--) {
//    if (values[i] !== undefined && values[i] !== null) {
//        return values[i];
//    }
//  };
//};