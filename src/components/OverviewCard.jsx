import React from 'react'
import './OverviewCard.css';

const OverviewCard = (props) => {
    return (
        <div className="card overview">
            <div className="overview__top">
                <label htmlFor="card">{props.title}</label>
                <img src={process.env.PUBLIC_URL + "/assets/images/" + props.images} alt="logo" />
            </div>
            <div className="overview__content">
                <div className="follower">{props.follower}</div>
                <div className={"growth" + props.style} >
                    <img src={process.env.PUBLIC_URL + "/assets/images/" + props.iconGrowth} alt="growth-icon" />
                    {props.growth}
                </div>
            </div>
        </div>
    )
}


OverviewCard.defaultProps = {
    iconGrowth: "icon-up.svg"
}

export default OverviewCard;