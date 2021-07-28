import React, { Component } from "react";
import { setRegisterUser } from "../../services/auth/auth";
import AuthForm from "./authForm/AuthForm";

class Auth extends Component {
  state = {
    error: "",
  };

  registerUser = (user) => {
    try {
      setRegisterUser(user);
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  render() {
    return <AuthForm registerUser={this.registerUser} />;
  }
}
export default Auth;
