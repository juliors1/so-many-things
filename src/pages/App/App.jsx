import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import Users from "../Users/Users";
import "./App.css";

class App extends Component {
  state = {
    user: authService.getUser(),
    juanThings: [
      {
        name: "FIFA21",
        image:
          "https://atalayar.com/sites/default/files/styles/foto_/public/noticias/Atalayar_FIFA%2021.jpg?itok=V4t36zZI",
        attributes: [
          "Player-online",
          "goal too many times",
          "Xboxone to PS5 Soon!",
          "Fut",
        ],
      },
      {
        name: "Art",
        image:
          "https://media.vanityfair.com/photos/5e8f9f875752fb00088317c4/16:9/w_1280,c_limit/The-Art-of-Making-Art-About-a-Plague.jpg",
        attributes: [
          "never get tired of it",
          "blue, white, black, red",
          "ZOOM",
        ],
      },
      {
        name: "Mac BookPro",
        image:
          "https://techcrunch.com/wp-content/uploads/2019/11/MacBook-Pro-16-IMG_2820-1.jpeg",
        attributes: ["fast", "sexy", "bugs", "ummmmm", "$$$$$$$$$"],
      },
    ],

    tylersThings: [
      {
        name: "husky",
        image:
          "https://images.unsplash.com/photo-1560830672-575980201c33?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHw%3D&w=1000&q=80",
        attributes: ["such fluff", "white when clean", "much shedding"],
      },
      {
        name: "siamese",
        image:
          "https://images.unsplash.com/photo-1523863745117-a610a34eb231?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHNpYW1lc2UlMjBjYXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        attributes: ["such anger", "loves water", "vocal"],
      },
      {
        name: "fiancee",
        image:
          "https://images.unsplash.com/photo-1565206077212-4eb48d41f54b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cmluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        attributes: ["small", "spunky", "caring"],
      },
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
    const { user } = this.state;
    return (
      <>
        <NavBar user={this.state.user} handleLogout={this.handleLogout} />
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
          render={() => (user ? <Users /> : <Redirect to="/login" />)}
        />
      </>
    );
  }
}

export default App;
