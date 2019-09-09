import React, { Component } from "react";
import Wrapper from "./components/Wrapper/Wrapper";
import Container from "./components/Container/Container";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Container />
      </Wrapper>
    );
  }
}

export default App;
