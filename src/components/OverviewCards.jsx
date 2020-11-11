import React, { Component } from 'react'
import './OverviewCards.css';

const OverviewCard = (props) => {
    return (
        <div className="card overview">
            <div className="overview__top">
                <label>{props.title}</label>
                <img src={process.env.PUBLIC_URL + "/assets/images/" + props.images} alt="logo" />
            </div>
            <div className="overview__content">
                <div className="follower">{props.follower}</div>
                <div className={"growth" + props.style} >
                    <img src={process.env.PUBLIC_URL + "/assets/images/" + props.iconGrowth} alt="growth icon" />
                    {props.growth}
                </div>
            </div>
        </div>
    )
}

class OverviewCards extends Component {
    render() {
        return (
            <>
                <OverviewCard
                    images="icon-facebook.svg"
                    title="Page Views"
                    follower="87"
                    growth="3%"
                    style=" up"
                />
                <OverviewCard
                    images="icon-facebook.svg"
                    title="Likes"
                    follower="52"
                    growth="2%"
                    style=" down"
                    iconGrowth="icon-down.svg"
                />
                <OverviewCard
                    images="icon-twitter.svg"
                    title="Likes"
                    follower="87"
                    growth="3%"
                    style=" up"
                />
                <OverviewCard
                    images="icon-twitter.svg"
                    title="Profil Views"
                    follower="5462"
                    growth="2257%"
                    style=" up"
                />
                <OverviewCard
                    images="icon-instagram.svg"
                    title="Retweets"
                    follower="117"
                    growth="303%"
                    style=" up"
                />
                <OverviewCard
                    images="icon-instagram.svg"
                    title="Likes"
                    follower="507"
                    growth="553%"
                    style=" up"
                />
                <OverviewCard
                    images="icon-youtube.svg"
                    title="Likes"
                    follower="107"
                    growth="19%"
                    style=" down"
                    iconGrowth="icon-down.svg"
                />
                <OverviewCard
                    images="icon-youtube.svg"
                    title="Total Views"
                    follower="1047"
                    growth="12%"
                    style=" down"
                    iconGrowth="icon-down.svg"
                />
            </>
        )
    }
}

OverviewCard.defaultProps = {
    iconGrowth: "icon-up.svg"
}

export default OverviewCards;