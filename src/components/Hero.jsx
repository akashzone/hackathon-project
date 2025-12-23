import './Hero.css';

/**
 * Our nice big welcome section. 
 * We want to make a great first impression here!
 */
const Hero = ({ onNavigate }) => {
    return (
        <section className="hero">
            <h1>Welcome to Aask</h1>
            <p className="builtBy">Built by data diggers.</p>
            <p className="heroTagline">The premium experience for modern inquiries.</p>
            <button className="heroCta" onClick={() => onNavigate('editor')}>
                Get Started Now
            </button>
        </section>
    );
};

export default Hero;
