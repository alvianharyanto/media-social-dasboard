import React, { Component } from "react";
import './Navbar.css';

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: "Dark"
    }
  }

  ModeSwitch = (e) => {
    if (e.target.checked) {
      this.setState({ mode: "Light" })
      document.documentElement.setAttribute("data-theme", "light")
    } else {
      this.setState({ mode: "Dark" })
      document.documentElement.setAttribute("data-theme", "dark")
    }
  }

  render() {
    return (
      <nav className="Navbar">
        <span>{this.state.mode} Mode</span>
        <label className="switch">
          <input type="checkbox" className="switch" id="switch" onChange={this.ModeSwitch} />
          <span className="slider"></span>
        </label>
      </nav>
    );
  }
}

export default Navbar;