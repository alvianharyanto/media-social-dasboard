import React, { Component } from "react"
import Navbar from "./Navbar"

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="title">
                    <h1>Social Media Dashboard</h1>
                    <p>Total Followers: <span>23,004</span></p>
                </div>
                <Navbar />
            </header>
        )
    }
}

export default Header;