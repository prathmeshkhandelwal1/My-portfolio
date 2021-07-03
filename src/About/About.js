import React from "react";
import "./About.scss";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <div className="about">
      <h2 className="about__head">
        <center>About</center>
      </h2>
      <div className="about__box">
        <Fade left>
          <h2 className="about__title">Anime</h2>

          <div className="about__box__container">
            <p className="about__box__container__p ">
              I started watching anime in class 9th and since then I'm a huge
              fan of them. They really helped me in getting motivated and made
              me realize that how it is super important to never give up on
              things which really matters to us and always keep trying harder
              than the last time and give our best shot. Btw my fav one is
              Naruto.
            </p>
            <video
              className="about__box__container__video "
              src="media/uchiha (1).mp4"
              autoPlay
              loop
              muted
              playsInline
              width="400px"
            ></video>
          </div>
        </Fade>
        <Fade right>
          <h2 className="about__title">Engineering</h2>
          <div className="about__box__container">
            <img
              className="about__box__container__image "
              alt="img"
              src="media/programming.jpg"
            />
            <p className="about__box__container__p ">
              Currently, I'm a student in Indian Institute Of Information
              Technology Vadodara. Been here for over an year now, I tried a lot
              of things and got interested in web development(mainly Javascript
              based). I also worked here on many group projects and many of my
              personal projects ( some of them you could find here in project
              section ). You can check it here on{" "}
              <a
                style={{ color: "white" }}
                href="https://github.com/prathmeshkhandelwal1"
              >
                Github.
              </a>
              .{" "}
            </p>
          </div>
        </Fade>
        <Fade left>
          <h2 className="about__title">Badminton</h2>
          <div className="about__box__container">
            <p className="about__box__container__p ">
              It has always been a super fun activity for me. I actively played
              badminton during my school years and also continued it in first
              year of my engineering ( It really helped me to make some good
              friends). Participating in Inter-School Competitions and
              Inter-College Competitions in college is a super fun activity and
              it helps me to stay fit and focused.
            </p>
            <img
              className="about__box__container__image"
              alt="img"
              src="media/badminton.jpg"
            />
          </div>
        </Fade>
        <Fade right>
          <h2 className="about__title">Gaming</h2>
          <div className="about__box__container">
            <img
              className="about__box__container__image "
              alt="img"
              src="media/csgo.jpg"
            />
            <p className="about__box__container__p ">
              Gaming is a crucial part of my life. I was so much into videos
              games since childhood. It is always a kind of refreshment for me
              (I prefer games which are story based). Some of my favourite games
              are Uncharted 4, The last of us, GTA 5, CSGO(I am terrible at its
              gameplay though ¯\_(ツ)_/¯ ){" "}
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default About;
