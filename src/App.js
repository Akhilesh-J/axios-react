import React, { Component } from "react";
import {Title} from "./components/Header/Header";
import {BodyContainer} from "./components/Body/BodyContainer";
import UserList from "./components/Body/UsersList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title>HTTP Calls with Axios</Title>
        <BodyContainer>
          <UserList/>
        </BodyContainer>
      </div>
    );
  }
}

export default App;
