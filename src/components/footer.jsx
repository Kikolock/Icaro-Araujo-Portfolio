import React from "react";

import github from '../assets/images/github-logo.png';
import linkedin from '../assets/images/Linkedin.png';
import instagram from '../assets/images/instagram.png';
import twitter from '../assets/images/twitter.png';
import email from '../assets/images/email.png';

function Footer() {
    return (
        <div className="foot-div">
            <div className="icon-main-div">
                <div className="icon-div">
                    <div>
                        <a href="https://www.linkedin.com/in/icaro-araujo/">
                            <img src={linkedin} alt="icon for linkedin" ></img>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/Kikolock"> 
                            <img src={github} alt="icon for github"></img>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/kiko_lock/">
                            <img src={instagram} alt="icon for instagram"></img>
                        </a>
                    </div>
                    <div>
                        <a href="mailto:icaro12@hotmail.com">
                            <img src={email} alt="icon for email"></img>
                        </a>
                    </div>
                    <div>
                        <a href="https://twitter.com/KikoLock">
                            <img src={twitter} alt="icon for twitter"></img>
                        </a>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="right-div">
                <p>Ⓒ 2023 All rights reserved | Developed & Designed By Icaro Araujo</p>
            </div>
        </div>
    )
}
export default Footer;
