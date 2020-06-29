import React from 'react'
import './About.scss'
import Fade from 'react-reveal/Fade'

function About() {

    return (
        <div className="about">
            <h2 className="about__head"><center>Projects</center></h2>
            <div className="about__box">
                <Fade left>
                <h2 className="about__title">Cerebro</h2>
                
                <div className="about__box__container">
                    <p className="about__box__container__p ">Cerebro is annual tech fest of IIITV. It was my 1st group project for building a website for this tech fest. This project really helped me a lot in gaining experience on group projetcs. Stacks was ReactJS, Scss for front-end. You can check its code here on <a style={{"color":'white'}} href="https://github.com/cerebro-iiitv/cerebro-web-2020">Github.</a>(<a style={{"color":'white'}} href="https://cerebro2020.iiitvadodara.ac.in/">https://cerebro2020.iiitvadodara.ac.in/</a>)</p>
                    <img className="about__box__container__image " alt="img" src="media/cerebro.png"/>

                </div>
                </Fade>
                <Fade right>
                <h2 className="about__title">RoboFriends</h2>
                <div className="about__box__container">
                    <img className="about__box__container__image " alt="img" src="media/robo.png"/>
                    <p className="about__box__container__p ">This is one of my personal projects. I made it while learning ReactJS. In this API is fetched and data is handled by React. Stacks on this projetcs is ReactJS, tachyons(a styling package), AJAX. You can check its code on <a style={{"color":'white'}} href="https://github.com/prathmeshkhandelwal1/Robofriends">Github</a><br/>(<a style={{'color':'white'}} href="https://prathmeshkhandelwal1.github.io/Robofriends/">https://prathmeshkhandelwal1.github.io/Robofriends/</a>)</p>
                </div>
                </Fade>
                <Fade left>
                <h2 className="about__title">Netflix Cloned</h2>
                <div className="about__box__container">
                    <p className="about__box__container__p ">This one is also a personal project. It is based on vanilla JS, HTML and CSS. I cloned netflix landing page in this. However, It is not responsive like other projects. You can check it out on <a style={{'color':'white'}} href="https://github.com/prathmeshkhandelwal1/Netflix_cloned">Github</a><br/>(<a style={{'color':'white'}} href="https://prathmeshkhandelwal1.github.io/Netflix_cloned/">https://prathmeshkhandelwal1.github.io/Netflix_cloned/</a>)</p>
                    <img className="about__box__container__image " alt="img" src="media/netflix.png"/>
                </div>
                </Fade>
                <Fade right>
                <h2 className="about__title">A simple TODO List</h2>
                <div className="about__box__container">
                    <img className="about__box__container__image " alt="img" src="media/todo.png"/>
                    <p className="about__box__container__p ">Again this one is also a personal project. It is also based on vanilla JS, HTML and CSS. It is a simple todo list with some extra features like marking it done and delete the items which you want. You can check it here on <a style={{'color':'white'}} href="https://github.com/prathmeshkhandelwal1/Shopping_list">Github</a><br/>(<a style={{'color':'white'}} href="https://prathmeshkhandelwal1.github.io/Shopping_list/">https://prathmeshkhandelwal1.github.io/Shopping_list/</a>)</p>
                </div>
                </Fade>
            </div>
            
            
        </div>
    )
}

export default About
