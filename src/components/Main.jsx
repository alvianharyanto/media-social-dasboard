import React, { Component } from "react"
import Cards from "./Cards"
import OverviewCards from "./OverviewCards"

class Main extends Component {
    render() {
        return (
            <main className="main">
                <div className="main__top">
                    <Cards />
                </div>
                <div clasName="title">
                    <h2>Overview - Today</h2>
                </div>
                <div className="main__bottom">
                    <OverviewCards />
                </div>
            </main>
        )
    }
}

export default Main;