import React from 'react'
import './OverviewCards.css';

const users = [
    {
        images: "icon-facebook.svg",
        title: "Page Views",
        follower: "87",
        growth: "3%",
        style: " up",
        iconGrowth: "icon-up.svg",
    },
    {
        images: "icon-facebook.svg",
        title: "Likes",
        follower: "52",
        growth: "2%",
        style: " down",
        iconGrowth: "icon-down.svg",
    },
    {
        images: "icon-instagram.svg",
        title: "Profil Views",
        follower: "5462",
        growth: "2257%",
        style: " up",
        iconGrowth: "icon-up.svg",
    },
    {
        images: "icon-instagram.svg",
        title: "Likes",
        follower: "52K",
        growth: "3%",
        style: " up",
        iconGrowth: "icon-up.svg",
    },
    {
        images: "icon-twitter.svg",
        title: "Retweets",
        follower: "117",
        growth: "303%",
        style: " up",
        iconGrowth: "icon-up.svg",
    },
    {
        images: "icon-twitter.svg",
        title: "Likes",
        follower: "507",
        growth: "553%",
        style: " up",
        iconGrowth: "icon-up.svg",
    },
    {
        images: "icon-youtube.svg",
        title: "Likes",
        follower: "107",
        growth: "19%",
        style: " down",
        iconGrowth: "icon-down.svg",
    },
    {
        images: "icon-youtube.svg",
        title: "Total Views",
        follower: "1047",
        growth: "12%",
        style: " down",
        iconGrowth: "icon-down.svg",
    }
]

const OverviewCards = () => {
    return (
        <>
            {users.map((user) => (
                <div className="card overview">
                    <div className="overview__top">
                        <label>{user.title}</label>
                        <img src={process.env.PUBLIC_URL + "/assets/images/" + user.images} alt="logo" />
                    </div>
                    <div className="overview__content">
                        <div className="follower">{user.follower}</div>
                        <div className={"growth" + user.style} >
                            <img src={process.env.PUBLIC_URL + "/assets/images/" + user.iconGrowth} alt="growth icon" />
                            {user.growth}
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default OverviewCards;