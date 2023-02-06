import React from "react";

function Navbar({currentPage,pageChange}){
    return(
        <nav className="nav">
            <div className="logo-nav">
                <a onClick={()=>pageChange('Home')} href="#home"><p>Icaro Araujo</p></a>
            </div>
            <div className="nav-link">
                <ul>
                <div><a href="#home" onClick={()=>pageChange('Home')}><li>Home</li></a></div>
                    <div><a href="#about" onClick={()=>pageChange('About')}><li>About Me</li></a></div>
                    <div><a href="#portfolio" onClick={()=>pageChange('Portfolio')}><li>Portfolio</li></a></div>
                    <div><a href="#contact" onClick={()=>pageChange('Contact')}><li>Contact</li></a></div>
                    <div><a href="#resume" onClick={()=>pageChange('Resume')}><li>Resume</li></a></div>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;