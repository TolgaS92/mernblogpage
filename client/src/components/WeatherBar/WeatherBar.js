import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import useStyles from './style';
import API from "../../utils/API";
import moment from 'moment';
import WeatherSearchForm from "../WeatherSearchForm/WeatherSearchForm";

const WeatherBar = () => {
    const classes = useStyles();
    const [weather, setWeather]=useState([])
    const [formObject, setFormObject] = useState("")
    const date = moment().format("MMMM Do YYYY");

    useEffect(() => {
        API.fetchWeather('denver')
          .then(res => {
              console.log(res.data.main)
              setWeather(res.data.main)
            })
          .catch(err => console.log(err))
      }, [])

    function handleInputChange (event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        const search = formObject.search;
        API.fetchWeather(search).then(res => {
            setWeather((res.data.main))
        }).catch(err => console.log(err));
      };

    return (
        <div>
        <WeatherSearchForm 
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        />
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={weather} title="" />
            <div className={classes.overlay}>
                <Typography variant="h6">
                    {formObject.search}
                </Typography>
            </div>
            <div className={classes.details}>
            <Typography variant="body2" color="textSecondary">Temperature: {weather.temp}˚F</Typography>
            </div>
            <Typography className={classes.title} variant="h5">{date}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" gutterBottom>Humidity: {weather.humidity}%</Typography>
            </CardContent>
        </Card>
        </div>
    )
}

export default WeatherBar;