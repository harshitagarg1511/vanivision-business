import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === '/') {
        setScrolled(window.scrollY > 50);
      } else {
        setScrolled(false);
      }
    };
    // set CSS variable for header height so content can offset fixed header
    const setHeaderHeight = () => {
      const el = document.querySelector('.header');
      if (el) {
        const h = el.getBoundingClientRect().height;
        document.documentElement.style.setProperty('--header-height', `${h}px`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', setHeaderHeight);
    handleScroll(); // Check initial
    setHeaderHeight();

    // close mobile menu when route changes
    const closeOnRoute = () => setMenuOpen(false);
    window.addEventListener('hashchange', closeOnRoute);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', setHeaderHeight);
      window.removeEventListener('hashchange', closeOnRoute);
    };
  }, [location.pathname]);

  // also close menu when location changes (React Router navigation)
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="logo">
        <Link to="/">VANIVISION</Link>
      </div>

      <button
        className={`menu-button ${menuOpen ? 'open' : ''}`}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(v => !v)}
      >
        <span className="hamburger" />
      </button>

      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/work">Our Work</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;