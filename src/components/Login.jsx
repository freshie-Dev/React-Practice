import React from "react";
import Input from "./Input";
import App from "./App";
function Login(props) {
  return (
    <form className="form">
      <Input type = "name" placeholder = "Enter your Name"/>
      <Input type = "password" placeholder = "Enter your Password"/>
      {!props.isRegistered ? <Input type = "password" placeholder = "Confirm your Password"/> : null}
      <button type="submit">
        {props.isRegistered ? "Login" : "Register"}
      </button>
    </form>
  );
}

export default Login;