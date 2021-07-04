import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core/';
import useStyles from './style';

const WeatherBar = () => {
    const classes = useStyles();
    return (
            <Card className={classes.card}>
            <CardMedia className={classes.media} image="" title="" />
            <div className={classes.overlay}>
                <Typography variant="h6">{}</Typography>
            </div>
            <div className={classes.details}>
            <Typography variant="body2" color="textSecondary">{}</Typography>
            </div>
            <Typography className={classes.title} variant="h5">{}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" gutterBottom>{}</Typography>
            </CardContent>
        </Card>
    )
}

export default WeatherBar;