import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core/';
import useStyles from './style';
import API from "../../utils/API";

const WeatherBar = () => {
    const classes = useStyles();
    const [weather, setWeather]=useState([])
    useEffect(() => {
        API.fetchWeather('denver')
          .then(res => setWeather(res.data.main))
          .catch(err => console.log(err))
      }, [])
    return (
        <div>
        <Card className={classes.card}>
            <CardMedia className={classes.media} image="" title="" />
            <div className={classes.overlay}>
                <Typography variant="h6">
                    Denver
                </Typography>
            </div>
            <div className={classes.details}>
            <Typography variant="body2" color="textSecondary">Temperature: {weather.temp}°</Typography>
            </div>
            <Typography className={classes.title} variant="h5">Day</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" gutterBottom>Explanation</Typography>
            </CardContent>
        </Card>
        </div>
    )
}

export default WeatherBar;