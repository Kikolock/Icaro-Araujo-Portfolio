import React, {useState, useEffect} from 'react';
import Footer from './footer';
import Navbar from './navbar';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';
import Loading from './pages/loading';

function Container () {
  const [currentPage, setCurrentPage] = useState('Loading');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCurrentPage('Home');
      setIsLoading(false);
    }, 5000);
  }, []);

  const renderAll = () => {
    if (isLoading) {
      return <Loading />;
    }

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
