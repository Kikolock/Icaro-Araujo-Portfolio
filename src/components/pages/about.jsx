import React from "react";
import picture from "../../assets/images/picture.jpeg"

const About = () => {
  return (
    <section className="about section">
      <div className="section-content">
        <div className="picture-container">
          <img src={ picture } alt="Profile" className=" picture" />
          <div className="name-container">
            <h1 className="name">Icaro Araujo</h1>
            <div className="vertical-bar"></div>
            <div className="about-text">
          <h1>sudhaushduashduahdsssss</h1>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
