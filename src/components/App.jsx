import React from "react";
import Login from "./Login";

var isUserLoggedIn = false;
var isUserRegistered = false;

function App() {
  return (
    <div className="container">
      {isUserLoggedIn && isUserRegistered ? 
        ( <h1>Hello</h1> ) : 
        ( <Login isRegistered={isUserRegistered} /> )
      }
    </div>
  );
}

export default App;
