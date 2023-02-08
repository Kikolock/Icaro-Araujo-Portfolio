import React from "react";
import picture from "../../assets/images/picture.jpeg"

function About () {
  return (
    <section className="about">
      <div className="section-content">
        <div className="picture-container">
          <img src={picture } alt="Profile" className=" picture" />
          <div className="name-container">
            <h1 className="name-container-2">
                <span className="name-1">Icaro</span>
                <span className="name-2">Araujo</span>
            </h1>
            <div className="vertical-bar"></div>
            <div className="about-text">
                <h1>
                  <p>Hello! I'm Icaro, a 30-year-old full-stack engineer and developer.</p>
                  <br></br>
                  <p>I'm finishing the Bootcamp Full Stack at the University of Toronto.</p>
                  <br></br>
                  <p>I have a bachelor's degree in mechanical engineering and quality engineering management.</p>
                  <br></br>
                  <p>I have extensive experience in leadership and supervisory positions in the engineering sectors.</p>
                </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
