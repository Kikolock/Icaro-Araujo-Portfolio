import React from "react";
import picture from "../../assets/images/picture.jpeg"

const About = () => {
  return (
    <section className="about section">
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
                <h1>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
