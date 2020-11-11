import React from 'react';
import './Cards.css';

const users = [
    {
        socialMedia: " facebook",
        images: "icon-facebook.svg",
        username: "@nathanf",
        follower: "1987",
        growth: "12 Today",
        labelContent: "Followers",
        style: " up",
        iconGrowth: "icon-up.svg",
    },
    {
        socialMedia: " twitter",
        images: "icon-twitter.svg",
        username: "@nathanf",
        follower: "1044",
        growth: "99 Today",
        labelContent: "Followers",
        style: " up",
        iconGrowth: "icon-up.svg",
    },
    {
        socialMedia: " instagram",
        images: "icon-instagram.svg",
        username: "@realnathanf",
        follower: "11K",
        growth: "1099 Today",
        labelContent: "Followers",
        style: " up",
        iconGrowth: "icon-up.svg",
    },
    {
        socialMedia: " youtube",
        images: "icon-youtube.svg",
        username: "Nathan F.",
        follower: "8239",
        growth: "144 Today",
        labelContent: "Subscribers",
        style: " down",
        iconGrowth: "icon-down.svg",
    },

]

const Cards = () => {
    return (
        <>
            {users.map((user) => (
                <div className={"card" + user.socialMedia}>
                    <div className="card__top">
                        <img src={process.env.PUBLIC_URL + "/assets/images/" + user.images} alt="social icon" />
                        <label>{user.username}</label>
                    </div>
                    <div className="card__content">
                        <span className="follower">{user.follower}</span>
                        <span>{user.labelContent}</span>
                    </div>
                    <div className="card__bottom">
                        <img src={process.env.PUBLIC_URL + "/assets/images/" + user.iconGrowth} alt="growth icon" />
                        <span className={"growth" + user.style}>{user.growth}</span>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Cards;