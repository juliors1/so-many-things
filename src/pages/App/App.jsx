import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import Users from '../Users/Users'
import "./App.css";
import { DefaultDeserializer } from "v8";


class App extends Component {
  state = {
    user: authService.getUser(),
    mikesThings: [
      {
        name: 'bag of butterflies',
        image: 'https://www.wired.com/images_blogs/wiredscience/2009/09/butterflies.jpg',
        attributes: ['fluttering','grace','awesomeness','gentle']
      },{
        name: 'surf n turf',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/a6/41/e5/surf-n-turf.jpg',
        attributes: ['all you need','if you get to surfin, best believe you gon need the turfin']
      },{
        name: 'bongos',
        image: 'https://media.guitarcenter.com/is/image/MMGS7//CP221-Tunable-Bongos-with-Bag/440683000000000-00-1600x1600.jpg',
        attributes: ['beats are life']
      }
    ]
  };


  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
    this.props.history.push("/");
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  render() {
    const { user } = this.state
    return (
      <>
        <NavBar user={this.state.user} handleLogout={this.handleLogout}/>
        <Route
          exact
          path="/"
          render={() => (
            <main>
              <h1>Welcome. This is an authorization template.</h1>
            </main>
          )}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/users"
          render={() =>
            user ? <Users /> : <Redirect to="/login" />
          }
        />
      </>
    );
  }
}

export default App;
