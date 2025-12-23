import { useState } from 'react';
import './Header.css';

/**
 * Our sleek site header. It's got the logo, the name, and some 
 * easy-to-find links for our visitors.
 */
const Header = ({ onNavigate, currentView, featuresInView }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (view, scrollId = null) => {
        onNavigate(view);
        setIsMobileMenuOpen(false);
        if (scrollId) {
            setTimeout(() => {
                document.getElementById(scrollId)?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    };

    return (
        <header className="header">
            <div className="headerContainer">
                {/* This is the home of our brand identity */}
                <div className="headerLogoSection" onClick={() => handleLinkClick('home')} style={{ cursor: 'pointer' }}>
                    <img src="/logo.png" alt="Aask Logo" className="headerLogo" />
                    <h1 className="headerTitle">Aask</h1>
                </div>

                {/* Hamburger Toggle */}
                <button className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu} aria-label="Toggle Menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                {/* Quick navigation to help people get around */}
                <nav className={`headerNav ${isMobileMenuOpen ? 'mobileOpen' : ''}`}>
                    {currentView !== 'editor' ? (
                        <>
                            <a href="#"
                                className={`navLink ${(currentView === 'home' && featuresInView) ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleLinkClick('home', 'features');
                                }}>
                                Features
                            </a>
                            <a href="#"
                                className={`navLink ${currentView === 'about' ? 'active' : ''}`}
                                onClick={(e) => { e.preventDefault(); handleLinkClick('about'); }}>
                                About
                            </a>
                            <button className="navCta" onClick={() => handleLinkClick('editor')}>
                                Get Started
                            </button>
                        </>
                    ) : (
                        <button className="navCta" onClick={() => handleLinkClick('home')}>
                            Back to Home
                        </button>
                    )}
                </nav>
            </div>
            {/* Overlay for mobile menu */}
            {isMobileMenuOpen && <div className="mobileOverlay" onClick={() => setIsMobileMenuOpen(false)}></div>}
        </header>
    );
};

export default Header;
