import React, {useState} from 'react';
import Footer from './footer';
import Navbar from './navbar';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';

function Container () {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderAll = () => {
        if (currentPage === 'Home') {
            return <Home currentPage={currentPage} pageChange={pageChange} />
    }
        if (currentPage === 'About') {
            return <About />
    }
        if (currentPage === 'Portfolio') {
            return <Portfolio />
    }
        if (currentPage === 'Resume') {
            return <Resume />
    }
    return <Contact />
}

const pageChange = (page) => {
    setCurrentPage (page);
}
return (
    <div className='App'>
        <div>
            <Navbar currentPage={currentPage} pageChange={pageChange} />
        </div>
        <div>
            {renderAll()}
        </div>
        <div>
            <Footer />
        </div>
    </div>
    );
}

export default Container;