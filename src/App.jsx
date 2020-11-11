import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (

      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>

    );
  }
}

export default App;

