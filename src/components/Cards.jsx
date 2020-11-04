import React, { Component } from 'react';
import './Cards.css';

const Card = (props) => {
    return (
        <>
            <div className="card__top">
                <img src={process.env.PUBLIC_URL + "/assets/images/" + props.images} alt="social-icon" />
                <label htmlFor="card">{props.username}</label>
            </div>
            <div className="card__content">
                <span className="follower">{props.follower}</span>
                <span>{props.labelContent}</span>
            </div>
            <div className="card__bottom">
                <img src={process.env.PUBLIC_URL + "/assets/images/" + props.iconGrowth} alt="growth-icon" />
                <span className={"growth" + props.style}>{props.growth}</span>
            </div>
        </>
    )
}

class Cards extends Component {
    render() {
        return (
            <>
                <div className="card facebook">
                    <Card
                        images="icon-facebook.svg"
                        username="@nathanf"
                        follower="1987"
                        growth="12 Today"
                        style=" up"
                    />
                </div>
                <div className="card twitter">
                    <Card
                        images="icon-twitter.svg"
                        username="@nathanf" follower="1044"
                        growth="99 Today"
                        style=" up"
                    />
                </div>
                <div className="card instagram">
                    <Card
                        images="icon-instagram.svg"
                        username="@realnathanf"
                        follower="11K"
                        growth="1099 Today"
                        style=" up"
                    />
                </div>
                <div className="card youtube">
                    <Card
                        images="icon-youtube.svg"
                        username="Nathan F."
                        follower="8239"
                        growth="144 Today"
                        labelContent="Subscriber"
                        style=" down"
                        iconGrowth="icon-down.svg"
                    />
                </div>
            </>
        )
    }
}

Card.defaultProps = {
    labelContent: "Followers",
    iconGrowth: "icon-up.svg"
}

export default Cards;