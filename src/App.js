import React, { Component } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App Component</h1>
        <Header />
        <Contact name="john" email="john@mail.com" phone="0908742" />
      </div>
    );
  }
}

export default App;
