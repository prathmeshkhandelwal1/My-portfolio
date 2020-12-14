import React from 'react'
import './Home.scss';

function Home() {
    return (
        <div className="home">
            <div className="home__box">
                <h1 className="home__box__head">
                    prathmesh khandelwal
                </h1>
                <ul className="home__box__list">
                    <a href="https://github.com/prathmeshkhandelwal1"><li className="home__box__list__element"><img className="home__box__list__element__image" alt="icon" src="media/github.svg"/></li></a>
                    <a href="https://www.instagram.com/__ugly.af_/"><li className="home__box__list__element"><img className="home__box__list__element__image" alt="icon" src="media/instagram.svg"/></li></a>
                    <a href="https://www.facebook.com/prathmesh.khandelwal.16"><li className="home__box__list__element"><img className="home__box__list__element__image" alt="icon" src="media/facebook.svg"/></li></a>
                    <a href="https://www.twitter.com/PrathmeshKhand7"><li className="home__box__list__element"><img className="home__box__list__element__image" alt="icon" src="media/twitter.svg"/></li></a>
                    <a href="https://www.linkedin.com/in/prathmesh-khandelwal-337b651a2/"><li className="home__box__list__element"><img className="home__box__list__element__image" alt="icon" src="media/linkedin.svg"/></li></a>
                </ul>
            </div>
            
            <div className="home__container">
                <img className="home__container__image" alt="" src="media/Prathmesh.jpg"/>
                <p className="home__container__para" >Hey! I'm Prathmesh. A full stack web developer and a software engineer who is passionate about learning new tech things in general.</p>
            </div>
        </div>
    )
}

export default Home
