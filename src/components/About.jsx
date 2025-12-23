import './About.css';

/**
 * The About Us page for Aask.
 * Designed to clearly communicate the project's value, innovation, and technical depth.
 */
const About = () => {
    return (
        <div className="aboutWrapper animateReveal">
            <header className="aboutHeader">
                <h1 className="aboutTitle">About Aask</h1>
                <p className="aboutSubtitle">The future of intelligent video editing, built by team <strong>DATA DIGGERS</strong>.</p>
            </header>

            <div className="aboutGrid">
                {/* 1. What Problem We Are Solving */}
                <section className="aboutSection card">
                    <div className="sectionIcon">⚠️</div>
                    <h2>What Problem We Are Solving</h2>
                    <p>
                        Video editing is traditionally a slow, manual, and expensive process. Creators, professionals, and students often spend hours on repetitive tasks like removing silences, identifying key highlights, or separating layers across multiple takes.
                    </p>
                    <p>
                        Current solutions are either too complex for quick edits or too basic to handle professional-grade AI refinements without constant manual intervention.
                    </p>
                </section>

                {/* 2. What Aask Does */}
                <section className="aboutSection card">
                    <div className="sectionIcon">⚡</div>
                    <h2>What Aask Does</h2>
                    <p>
                        Aask is an AI-powered editing workspace that acts as a proactive assistant for your creative workflow. It analyzes your footage in real-time to automate the "boring" parts of editing, letting you focus on storytelling.
                    </p>
                    <p>
                        It’s helpful, practical, and designed to turn a 5-hour edit into a 5-minute breeze.
                    </p>
                </section>

                {/* 3. Who It Is For */}
                <section className="aboutSection card">
                    <div className="sectionIcon">👥</div>
                    <h2>Who It Is For</h2>
                    <ul className="aboutList">
                        <li><strong>Content Creators:</strong> Ship videos faster across platforms.</li>
                        <li><strong>Podcasters:</strong> Instant audio cleanup and silence removal.</li>
                        <li><strong>Professionals:</strong> A smart copilot for high-stakes projects.</li>
                        <li><strong>Students:</strong> Accessible high-end editing tools for everyone.</li>
                    </ul>
                </section>

                {/* 4. What Makes Aask Different */}
                <section className="aboutSection card highlight">
                    <div className="sectionIcon">💡</div>
                    <h2>Innovation at Core</h2>
                    <p>
                        Most AI tools only follow commands; Aask <strong>suggests</strong> solutions. Our innovation lies in the proactive nature of our AI Editing Assistant, which identifies repetition and energy peaks before you even start cutting.
                    </p>
                    <p>
                        It doesn't just edit; it understands the context of your data, making it a true AI companion rather than just a utility.
                    </p>
                </section>

                {/* 5. Technology Behind Aask */}
                <section className="aboutSection card">
                    <div className="sectionIcon">🛠️</div>
                    <h2>Technology Stack</h2>
                    <p>
                        Built on a robust stack including <strong>React</strong> for a fluid frontend and a powerful <strong>Vite</strong> build system. Our backend and AI layers leverage state-of-the-art models for real-time video analysis and speech processing.
                    </p>
                </section>

                {/* 6. Feasibility & Impact */}
                <section className="aboutSection card">
                    <div className="sectionIcon">📈</div>
                    <h2>Feasibility & Impact</h2>
                    <p>
                        Aask is highly scalable. By modularizing our AI services, we can handle everything from short TikToks to feature-length documentaries. Its real-world impact is immediate: reducing human effort while maintaining creative control.
                    </p>
                </section>

                {/* 7. Vision & Future Scope */}
                <section className="aboutSection card">
                    <div className="sectionIcon">🚀</div>
                    <h2>Vision & Future</h2>
                    <p>
                        Our roadmap includes real-time multi-user collaboration and deeper integration with motion graphics. We envision Aask becoming the industry standard for "context-aware" video editing.
                    </p>
                </section>

                {/* 8. Team DATA DIGGERS */}
                <section className="aboutSection card teamSection">
                    <div className="sectionIcon">🧑‍💻</div>
                    <h2>Team DATA DIGGERS</h2>
                    <p className="teamQuote">
                        "We are a team fueled by the passion for digging deep into data to find creative solutions. Our teamwork is our strength, and our focus is innovation."
                    </p>
                </section>
            </div>
        </div>
    );
};

export default About;
