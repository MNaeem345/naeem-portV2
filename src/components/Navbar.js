import React, {useEffect, useState} from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import '../components/Navbar.css';




const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const handleSmoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
  
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top +150;
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
        <div className="nav-container">
        <nav className={`navbar ${isOpen ? 'open' : ''}`}>
            <button className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
                <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'}`} />
            </button>
            <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <li className={`navbar-li ${isOpen ? 'open' : ''}`}><a href="#about" onClick={() => handleSmoothScroll("about")}>{`About/>`}</a></li>
                <li className={`navbar-li ${isOpen ? 'open' : ''}`}><a href="#experience" onClick={() => handleSmoothScroll("experience")}>{`Experiences/>`}</a></li>
                <li className={`navbar-li ${isOpen ? 'open' : ''}`}><a href="#projects" onClick={() => handleSmoothScroll("projects")}>{`Projects/>`}</a></li>
                <li className={`navbar-li ${isOpen ? 'open' : ''}`}><a href="#contact" onClick={() => handleSmoothScroll("contact")}>{`Contact Me/>`}</a></li>
                <a href="#"><button className="resume-button">
                    Resume
                </button></a>
            </ul>
            

        </nav>
        </div>
    )
}

export default Navbar;

