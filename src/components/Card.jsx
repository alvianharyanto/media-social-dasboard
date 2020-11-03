import React from 'react';
import './Card.css';

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

Card.defaultProps = {
    labelContent: "Followers",
    iconGrowth: "icon-up.svg"
}

export default Card;