import React, {useEffect, useState} from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import '../components/Navbar.css';
import logo from '../assets/naeem4.png';
import resume from '../assets/Mohammed Naeem Resume (17).pdf'




const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };


  const handleSmoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
  
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top +100;
      const start = window.pageYOffset;
      const duration = 1000; // Adjust the duration as needed
      let startTime = null;
  
      function scrollAnimation(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;
        const easeInOutCubic = t => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1);
        const scrollTo = start + offsetTop * easeInOutCubic(progress);
  
        window.scrollTo(0, scrollTo);
  
        if (progress < 1) {
          requestAnimationFrame(scrollAnimation);
        }
      }
  
      requestAnimationFrame(scrollAnimation);
    }
  };
  const handleSmoothScrolls = (targetId) => {
    const targetElement = document.getElementById(targetId);
  
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top;
      const start = window.pageYOffset;
      const duration = 1000; // Adjust the duration as needed
      let startTime = null;
  
      function scrollAnimation(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;
        const easeInOutCubic = t => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1);
        const scrollTo = start + offsetTop * easeInOutCubic(progress);
  
        window.scrollTo(0, scrollTo);
  
        if (progress < 1) {
          requestAnimationFrame(scrollAnimation);
        }
      }
  
      requestAnimationFrame(scrollAnimation);
    }
  };

    
    return (
        <section id='top'>
        <div className="nav-container">
        <nav className={`navbar ${isOpen ? 'open' : 'close'}`}>
        <a href='#top' onClick={() => handleSmoothScrolls("top")} className="nav-logo"><img src={logo} /></a>
            <button className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
                <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'}`} />
            </button>
            <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <li className={`navbar-li ${isOpen ? 'open' : ''}`} onClick={closeNavbar}><a href="#about" onClick={() => handleSmoothScroll("about")}>{`About/>`}</a></li>
                <li className={`navbar-li ${isOpen ? 'open' : ''}`} onClick={closeNavbar}><a href="#experience" onClick={() => handleSmoothScroll("experience")}>{`Experiences/>`}</a></li>
                <li className={`navbar-li ${isOpen ? 'open' : ''}`} onClick={closeNavbar}><a href="#projects" onClick={() => handleSmoothScroll("projects")}>{`Projects/>`}</a></li>
                <li className={`navbar-li ${isOpen ? 'open' : ''}`} onClick={closeNavbar}><a href="#contact" onClick={() => handleSmoothScroll("contact")}>{`Contact Me/>`}</a></li>
                <a href={resume} target="_blank" onClick={closeNavbar}><button className="resume-button">
                    Resume
                </button></a>
            </ul>
            

        </nav>
        </div>
        </section>
    )
}

export default Navbar;

