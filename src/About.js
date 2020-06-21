import React from 'react'
import './About.scss'
import Fade from 'react-reveal/Fade'

function About() {

    return (
        <div className="about">
            <h2 className="about__head"><center>About</center></h2>
            <div className="about__box">
                <Fade left>
                <h2 className="about__title">Anime</h2>
                
                <div className="about__box__container">
                    <p className="about__box__container__p ">Fugiat ut ad velit exercitation laboris deserunt veniam dolore aliquip veniam. Duis anim amet incididunt voluptate amet commodo exercitation irure minim veniam excepteur consectetur ea. Qui ipsum non eu nisi non velit. Irure consequat ad tempor ipsum Lorem dolore culpa laboris officia. Qui aliqua culpa dolor consequat deserunt eu sint dolore id duis aute eiusmod mollit incididunt. Fugiat tempor incididunt in esse consequat ullamco enim cillum officia id veniam velit. Elit mollit ea Lorem velit officia cillum ex velit nisi aliquip nulla ex.</p>
                    <video className="about__box__container__video " src="media/uchiha.mp4" autoPlay loop muted playsInline width="400px"></video>

                </div>
                </Fade>
                <Fade right>
                <h2 className="about__title">Anime</h2>
                <div className="about__box__container">
                    <img className="about__box__container__image " src="media/program.jpg"/>
                    <p className="about__box__container__p ">Fugiat ut ad velit exercitation laboris deserunt veniam dolore aliquip veniam. Duis anim amet incididunt voluptate amet commodo exercitation irure minim veniam excepteur consectetur ea. Qui ipsum non eu nisi non velit. Irure consequat ad tempor ipsum Lorem dolore culpa laboris officia. Qui aliqua culpa dolor consequat deserunt eu sint dolore id duis aute eiusmod mollit incididunt. Fugiat tempor incididunt in esse consequat ullamco enim cillum officia id veniam velit. Elit mollit ea Lorem velit officia cillum ex velit nisi aliquip nulla ex.</p>
                </div>
                </Fade>
                <Fade left>
                <h2 className="about__title">Anime</h2>
                <div className="about__box__container">
                    <p className="about__box__container__p ">Fugiat ut ad velit exercitation laboris deserunt veniam dolore aliquip veniam. Duis anim amet incididunt voluptate amet commodo exercitation irure minim veniam excepteur consectetur ea. Qui ipsum non eu nisi non velit. Irure consequat ad tempor ipsum Lorem dolore culpa laboris officia. Qui aliqua culpa dolor consequat deserunt eu sint dolore id duis aute eiusmod mollit incididunt. Fugiat tempor incididunt in esse consequat ullamco enim cillum officia id veniam velit. Elit mollit ea Lorem velit officia cillum ex velit nisi aliquip nulla ex.</p>
                    <img className="about__box__container__image " src="media/download.png"/>
                </div>
                </Fade>
                <Fade right>
                <h2 className="about__title">Anime</h2>
                <div className="about__box__container">
                    <img className="about__box__container__image " src="media/download.png"/>
                    <p className="about__box__container__p ">Fugiat ut ad velit exercitation laboris deserunt veniam dolore aliquip veniam. Duis anim amet incididunt voluptate amet commodo exercitation irure minim veniam excepteur consectetur ea. Qui ipsum non eu nisi non velit. Irure consequat ad tempor ipsum Lorem dolore culpa laboris officia. Qui aliqua culpa dolor consequat deserunt eu sint dolore id duis aute eiusmod mollit incididunt. Fugiat tempor incididunt in esse consequat ullamco enim cillum officia id veniam velit. Elit mollit ea Lorem velit officia cillum ex velit nisi aliquip nulla ex.</p>
                </div>
                </Fade>
            </div>
            
            
        </div>
    )
}

export default About
