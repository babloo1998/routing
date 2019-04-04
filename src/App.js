// import React, { Component } from 'react';
// import './App.css';
import React, { Component } from 'react';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom';

import Header from './components/Header.js';
import Home from './components/Home.js';
import BooksList from './components/BooksList/BooksList.js';
import BookDetail from './components/BookDetail/BookDetail.js';


class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      username: "admin",
      password: "admin",
      isAuth: false
    }
  }

  toggleAuth = () =>
  {
    console.log("toggle runs");
    this.setState({
      isAuth: !this.state.isAuth
    });
  }

  handleSubmit = (event,data) =>
  {
    event.preventDefault();
    if (this.state.username === data.username && this.state.password === data.password )
    {
      this.setState({
        isAuth: true
      });
    } else {
      this.setState({
        isAuth: false
      });
    }
    console.log("runs");
    console.log(this.state.isAuth);
  }

  render() {
    const {username,password,isAuth} = this.state;
    return (
      <div className="App">
        
        <Router>
          <Header isAuth={isAuth} />
          <Route
            exact
            path="/"
            component={Home}
          />
          <Route
            path="/login"
            render={()=> <Login handleSubmit={this.handleSubmit} isAuth={isAuth}/>}
          />  
          <Route 
            path="/logout"
            render={()=> <Logout isAuth={isAuth} toggleAuth={this.toggleAuth}/>}
            />      
          <PrivateRoute
            path="/Books"
            isAuth={isAuth}
            component={BooksList}
            />
          <PrivateRoute
            path="/bookdetail"
            isAuth={isAuth}
            component = {BookDetail}
          />

        </Router>
      </div>
    );
  }
}

export default App;

const PrivateRoute = ({ component: Component,isAuth, ...rest }) => (
  <Route {...rest} render={props => (
    isAuth ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)
