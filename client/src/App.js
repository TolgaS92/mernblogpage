import { Container} from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Profile from './components/Profile/Profile';
import WeatherBar from './components/WeatherBar/WeatherBar';

function App() {
  

  return (
    
    <BrowserRouter>
      <Container maxWidth="lg">
      <WeatherBar 
        style={{
          display: "block",
          height: "20px",
          width: "10px"
        }}
      />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/auth" component={Auth}/>
          <Route exact path="/profile" component={Profile}/>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
