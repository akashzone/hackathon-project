import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Editor from './components/Editor'
import './App.css'

/**
 * Our cleaner, more modular App component!
 * Now it's just a simple wrapper that brings everything together.
 */
function App() {
    const [currentView, setCurrentView] = useState('home');
    const [featuresInView, setFeaturesInView] = useState(false);

    useEffect(() => {
        // We use an Intersection Observer to highlight the link when the section is in view
        const observer = new IntersectionObserver(
            ([entry]) => {
                setFeaturesInView(entry.isIntersecting);
            },
            { threshold: 0.3 } // Trigger when 30% of the section is visible
        );

        const featuresSection = document.getElementById('features');
        if (featuresSection) {
            observer.observe(featuresSection);
        }

        return () => {
            if (featuresSection) {
                observer.unobserve(featuresSection);
            }
        };
    }, [currentView]); // Re-run if view changes (to find the element again if it was removed/re-added)

    return (
        <div className={`appWrapper ${currentView === 'editor' ? 'editorActive' : ''}`}>
            <Header
                onNavigate={setCurrentView}
                currentView={currentView}
                featuresInView={featuresInView}
            />

            <main className={currentView === 'editor' ? 'editorMain' : 'mainContent'}>
                {currentView === 'home' && (
                    <>
                        <Hero onNavigate={setCurrentView} />
                        <Features onNavigate={setCurrentView} />
                    </>
                )}
                {currentView === 'about' && <About />}
                {currentView === 'editor' && <Editor onExit={() => setCurrentView('home')} />}
            </main>
        </div>
    )
}

export default App
