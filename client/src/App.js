import { Container} from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Profile from './components/Profile/Profile';

function App() {
  const user = JSON.parse(localStorage.getItem('profile'));
  
  return (
    
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/auth" component={() => (!user ? <Auth /> : <Redirect to="/" />)}></Route>
          <Route exact path="/profile" component={Profile}/>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
