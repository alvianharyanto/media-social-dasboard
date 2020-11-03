import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import OverviewCard from "./components/OverviewCard";

class App extends Component {
  render() {
    return (
      <>
        <header className="header">

          <div className="title">
            <h1>Social Media Dashboard</h1>
            <p>Total Followers: <span>23,004</span></p>
          </div>

          <Navbar />

        </header>
        <main className="main">
          <div className="main__top">
            <div className="card facebook">
              <Card
                images="icon-facebook.svg" username="@nathanf" follower="1987" growth="12 Today" style=" up"
              />
            </div>
            <div className="card twitter">
              <Card
                images="icon-twitter.svg" username="@nathanf" follower="1044" growth="99 Today" style=" up"
              />
            </div>
            <div className="card instagram">
              <Card
                images="icon-instagram.svg" username="@realnathanf" follower="11K" growth="1099 Today" style=" up"
              />
            </div>
            <div className="card youtube">
              <Card
                images="icon-youtube.svg" username="Nathan F." follower="8239" growth="144 Today" labelContent="Subscriber" style=" down"
                iconGrowth="icon-down.svg"
              />
            </div>
          </div>

          <div clasName="title">
            <h2>Overview - Today</h2>
          </div>

          <div className="main__bottom">

            <OverviewCard
              images="icon-facebook.svg" title="Page Views" follower="87" growth="3%" style=" up"
            />
            <OverviewCard
              images="icon-facebook.svg" title="Likes" follower="52" growth="2%" style=" down" iconGrowth="icon-down.svg"
            />
            <OverviewCard
              images="icon-twitter.svg" title="Likes" follower="87" growth="3%" style=" up"
            />
            <OverviewCard
              images="icon-twitter.svg" title="Profil Views" follower="5462" growth="2257%" style=" up"
            />
            <OverviewCard
              images="icon-instagram.svg" title="Retweets" follower="117" growth="303%" style=" up"
            />
            <OverviewCard
              images="icon-instagram.svg" title="Likes" follower="507" growth="553%" style=" up"
            />
            <OverviewCard
              images="icon-youtube.svg" title="Likes" follower="107" growth="19%" style=" down" iconGrowth="icon-down.svg"
            />
            <OverviewCard
              images="icon-youtube.svg" title="Total Views" follower="1047" growth="12%" style=" down" iconGrowth="icon-down.svg"
            />
          </div>
        </main>
      </>
    );
  }
}

export default App;

