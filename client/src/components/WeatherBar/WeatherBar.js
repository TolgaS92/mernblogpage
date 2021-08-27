import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import useStyles from './style';
import API from "../../utils/API";
import moment from 'moment';
import WeatherSearchForm from "../WeatherSearchForm/WeatherSearchForm";

const WeatherBar = () => {
    const classes = useStyles();
    const [weather, setWeather]=useState([])
    const [icon, setIcon]=useState('')
    const [findIp, setFindIp] = useState('')
    const [formObject, setFormObject] = useState('')
    const date = moment().format("MMMM Do YYYY");

    useEffect(() => {
        API.fetchIp()
          .then(res => {
              setFindIp(res.data.city)
            })
        API.fetchWeather(findIp,formObject)
          .then(res => {
              setIcon(res.data.weather[0].icon)
              setWeather(res.data.main)
            })
          .catch(err => console.log(err))
      }, [findIp,formObject])


    function handleInputChange (event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        const search = formObject.search;
        API.fetchWeather(search).then(res => {
            setIcon(res.data.weather[0].icon)
            setWeather(res.data.main)
        }).catch(err => console.log(err));
      };

    return (
        <div>
        <WeatherSearchForm 
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        />
        <Card className={classes.card}>
        <Typography className={classes.title}>Your Location is: {findIp}</Typography>
            <CardMedia className={classes.media}>
                <img alt="icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
            </CardMedia>
            <Card className={classes.card}>
            <Typography className={classes.title} variant="h5">{formObject.search}</Typography>
            </Card>
            <CardContent>
            <Typography className={classes.details}>Day: {date}</Typography>
            <Typography className={classes.details} variant="body2" color="textSecondary">Temperature: {weather.temp}˚F</Typography>
            <Typography className={classes.details} variant="body2" color="textSecondary" component="p" gutterBottom>Humidity: {weather.humidity}%</Typography>
            </CardContent>
        </Card>
        </div>
    )
}

export default WeatherBar;