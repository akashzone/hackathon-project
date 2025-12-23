import './Header.css';

/**
 * Our sleek site header. It's got the logo, the name, and some 
 * easy-to-find links for our visitors.
 */
const Header = ({ onNavigate, currentView, featuresInView }) => {
    return (
        <header className="header">
            <div className="headerContainer">
                {/* This is the home of our brand identity */}
                <div className="headerLogoSection" onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>
                    <img src="/logo.png" alt="Aask Logo" className="headerLogo" />
                    <h1 className="headerTitle">Aask</h1>
                </div>

                {/* Quick navigation to help people get around */}
                <nav className="headerNav">
                    {currentView !== 'editor' ? (
                        <>
                            <a href="#"
                                className={`navLink ${(currentView === 'home' && featuresInView) ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    onNavigate('home');
                                    setTimeout(() => {
                                        document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                                    }, 100);
                                }}>
                                Features
                            </a>
                            <a href="#"
                                className={`navLink ${currentView === 'about' ? 'active' : ''}`}
                                onClick={(e) => { e.preventDefault(); onNavigate('about'); }}>
                                About
                            </a>
                            <button className="navCta" onClick={() => onNavigate('editor')}>
                                Get Started
                            </button>
                        </>
                    ) : (
                        <button className="navCta" onClick={() => onNavigate('home')}>
                            Back to Home
                        </button>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
