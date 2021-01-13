import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import Users from '../Users/Users'
import "./App.css";

class App extends Component {
  state = {
    user: authService.getUser(),
    julioThings: [
      {
        name: 'Goku',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71om4dFYpdL._SL1500_.jpg',
        attributes: ['Health:90', 'Ki:40', 'Stamina:100']
      },
      {
        name: 'Lucario',
        image: 'https://cdn.bulbagarden.net/upload/thumb/d/d7/448Lucario.png/1200px-448Lucario.png',
        attributes: ['fighting', 'steel', 'not a taco', 'why gravy exists']
      },
      {
        name: 'Among us',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlBSTWoS7qDmebYHU_tdAEmWVsHjL1NC0FUQ&usqp=CAU',
        attributes: ["red", "green", "blue", "yellow"]
      }
    ],

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
