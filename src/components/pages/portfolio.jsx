import React from "react";
import github from "../../assets/images/cat.png";
import web from "../../assets/images/web.png";
import costOfLiving from "../../assets/images/cost.jpg";
import theLocalLibrary from "../../assets/images/locallibrary.png";
import weatherDashboard from "../../assets/images/weatherdashboard.jpg";
import quiz from "../../assets/images/quiz.png";
import dailyPlanner from "../../assets/images/daily.jpg";
import textEditor from "../../assets/images/text-editor.png";

function Portfolio() {
    const portfolioData = [{
        "image": costOfLiving,
        "title": "Cost of Living",
        "description": "A application that the user can navigate, and understand better the cost of living in different cities around the world.",
        "skills": "HTML     CSS     JavaScript     API",
        "github": {"icon":github,
            "link":"https://github.com/Kikolock/Cost-of-living-Project"},
        "deployedLink": {"icon":web,
            "link":"https://kikolock.github.io/Cost-of-living-Project/"}
    },
    {
        "image": theLocalLibrary,
        "title": "The Local Library",
        "description": "A small library with a collection of over 100 different books. This application allows the user to make their personal account and save as many books as they wish as their favorites.",
        "skills": "JavaScript     Express.js     Node.js     OOP     SQL     Heroku",
        "github": {"icon":github,
        "link":"https://github.com/Kikolock/Online-Library"},
    "deployedLink": {"icon":web,
        "link":"https://the-local-library.herokuapp.com/"}
    },
    {
        "image": weatherDashboard,
        "title": "Weather Dashboard",
        "description": "A weather dashboard to check today and next 5 days information in details such as temperature, humidity and wind speed.",
        "skills": "HTML     CSS     JavaScript     API",
        "github": {"icon":github,
            "link":"https://github.com/Kikolock/Weather-dashboard"},
        "deployedLink": {"icon":web,
            "link":"https://kikolock.github.io/Weather-dashboard/"}
    },
    {
        "image": quiz,
        "title": "Coding Quiz",
        "description": "A timed quiz with multiple-choice questions. This quiz is consisted into questions related to coding, more specific questions, HTML, CSS and JavaScript fundamentals",
        "skills": "HTML      CSS     JavaScript",
        "github": {"icon":github,
            "link":"https://github.com/Kikolock/Quiz-test-JS"},
        "deployedLink": {"icon":web,
            "link":"https://kikolock.github.io/Quiz-test-JS/"}
    },
    {
        "image": dailyPlanner,
        "title": "Quiz Challenge",
        "description": "A simple calendar that allows a user to save events for each hour of the day. Each block is color-coded to indicate whether it is not in the past, present or future.",
        "skills": "HTML    Moment.js  JavaScript  Jquery    Bootstrap",
        "github": {"icon":github,
            "link":"https://github.com/Kikolock/Daily-Planner-"},
        "deployedLink": {"icon":web,
            "link":"https://kikolock.github.io/Daily-Planner-/"}
    },
    {
        "image": textEditor,
        "title": "Just Another Text Editor",
        "description": "JEST is a simple text editor where you can make notes and save it. Also this application can be installed on your computer using the PWA technology",
        "skills": "Javascript    Node.JS    PWA    Heroku",
        "github": {"icon":github,
        "link":"https://github.com/Kikolock/Text-Editor"},
    "deployedLink": {"icon":web,
        "link":"https://text-editor-k.herokuapp.com/"}
    }]

    const projects = portfolioData.map(activity => {
        return (
          <div className="card-div">
            <div className="img-portfolio">
              <img src={activity.image} alt="project-img" />
            </div>
            <div className="content-div">
              <div className="title">
                <h3>{activity.title}</h3>
              </div>
              <div className="description">
                <p>{activity.description}</p>
              </div>
              <div className="skills">
                <p>{activity.skills}</p>
              </div>
              <div className="links">
                <div>
                  <a href={activity.github.link}>
                    <img
                      className="iconss"
                      src={activity.github.icon}
                      alt="github icon"
                    />
                  </a>
                </div>
                <div>
                  <a href={activity.deployedLink.link}>
                    <img
                      className="iconss"
                      src={activity.deployedLink.icon}
                      alt="website icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      });
      
      return (
        <div className="portfolio-main-div">
          <div className="portfolio-heading-div">
            <h1>MY PORTFOLIO</h1>
          </div>
          <div className="cards-main-div">{projects}</div>
        </div>
      );      
}

export default Portfolio;