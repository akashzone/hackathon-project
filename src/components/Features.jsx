import { useState } from 'react';
import './Features.css';

/**
 * Pre-built animation components for each feature.
 * These create a high-end, futuristic feel.
 */

const AudioExtractionPreview = () => (
    <div className="previewContainer audioExtraction">
        <div className="videoFrame">
            <div className="playBadge">▶</div>
        </div>
        <div className="waveformContainer">
            <div className="waveform split top"></div>
            <div className="waveform split bottom"></div>
        </div>
    </div>
);

const SilenceDetectionPreview = () => (
    <div className="previewContainer silenceDetection">
        <div className="timeline">
            <div className="silenceHighlight" style={{ left: '20%', width: '15%' }}></div>
            <div className="silenceHighlight" style={{ left: '60%', width: '10%' }}></div>
            <div className="playhead"></div>
        </div>
    </div>
);

const TimestampCutsPreview = () => (
    <div className="previewContainer timestampCuts">
        <div className="timeline">
            <div className="cutMarker" style={{ left: '30%' }}></div>
            <div className="cutMarker" style={{ left: '50%' }}></div>
            <div className="cutMarker" style={{ left: '80%' }}></div>
            <div className="activeClip"></div>
        </div>
    </div>
);

const LanguageDetectionPreview = () => (
    <div className="previewContainer languageDetection">
        <div className="worldMap">
            <div className="detectionTag" style={{ top: '30%', left: '40%' }}>EN</div>
            <div className="detectionTag" style={{ top: '50%', left: '20%' }}>ES</div>
            <div className="detectionTag" style={{ top: '40%', left: '70%' }}>FR</div>
        </div>
    </div>
);

const RepetitionDetectionPreview = () => (
    <div className="previewContainer repetitionDetection">
        <div className="waveform">
            <div className="repetitionHighlight" style={{ left: '10%', width: '20%' }}></div>
            <div className="repetitionHighlight" style={{ left: '50%', width: '20%' }}></div>
        </div>
    </div>
);

const HighEnergyPreview = () => (
    <div className="previewContainer highEnergy">
        <div className="energyWave">
            <div className="energyPeak" style={{ left: '25%' }}></div>
            <div className="energyPeak" style={{ left: '65%' }}></div>
            <div className="energyPeak" style={{ left: '85%' }}></div>
        </div>
    </div>
);

const ScreenSharingPreview = () => (
    <div className="previewContainer screenSharing">
        <div className="screenWindow">
            <div className="aiSuggestionBox">AI Suggestion: Cut here?</div>
            <div className="cursorPointer"></div>
        </div>
    </div>
);

const AiAssistantPreview = () => (
    <div className="previewContainer aiAssistant">
        <div className="aiOrbit">
            <div className="aiCore"></div>
            <div className="suggestionPulse"></div>
        </div>
    </div>
);

/**
 * Our interactive features section.
 * Now even more dynamic with animated previews and camelCase!
 */
const Features = ({ onNavigate }) => {
    const coreFeatures = [
        {
            title: "AI Editing Assistant",
            description: "Our flagship AI assistant provides proactive suggestions for professional-grade results.",
            preview: <AiAssistantPreview />
        }
    ];

    const regularFeatures = [
        { title: "Extract Audio & Speech", description: "Seamlessly separate audio and speech from any video source.", preview: <AudioExtractionPreview /> },
        { title: "Silence Detection", description: "Automatically scan and remove awkward silences instantly.", preview: <SilenceDetectionPreview /> },
        { title: "Smart Timestamp Cuts", description: "Let AI suggest impactful moments for perfect story flow.", preview: <TimestampCutsPreview /> },
        { title: "Language Detection", description: "Identify languages used in audio for easy localization.", preview: <LanguageDetectionPreview /> },
        { title: "Repetition Detection", description: "Eliminate filler words and redundant phrases for crisp speech.", preview: <RepetitionDetectionPreview /> },
        { title: "High Energy Detection", description: "Find the most exciting, high-energy highlights automatically.", preview: <HighEnergyPreview /> },
        { title: "Creative Mode", description: "Unlock experimental AI styles for a professional creative edge.", preview: <AiAssistantPreview /> },
        { title: "Screen Sharing", description: "AI editing Copilot for real-time guidance during sessions.", preview: <ScreenSharingPreview /> }
    ];

    const [activeCoreIdx, setActiveCoreIdx] = useState(0);
    const [activeRegIdx, setActiveRegIdx] = useState(0);

    return (
        <>
            {/* --- CORE FEATURES SECTION --- */}
            <section className="featuresCategory" id="features">
                <h2 className="sectionTitle">Core Features</h2>
                <div className="interactiveFeatureContainer">
                    <div className="featuresSidebar">
                        {coreFeatures.map((feature, index) => (
                            <button
                                key={index}
                                className={`featureTitleBtn core ${activeCoreIdx === index ? 'active' : ''}`}
                                onClick={() => setActiveCoreIdx(index)}
                            >
                                {feature.title}
                            </button>
                        ))}
                    </div>
                    <div className="featureDisplay core">
                        <div className="displayContent animateReveal" key={activeCoreIdx}>
                            <div className="previewArea">{coreFeatures[activeCoreIdx].preview}</div>
                            <h3>{coreFeatures[activeCoreIdx].title}</h3>
                            <p>{coreFeatures[activeCoreIdx].description}</p>
                            <div className="actionRow">
                                <span className="coreBadge">MVP FEATURE</span>
                                <button className="tryDemoBtn" onClick={() => onNavigate('editor')}>Try Demo</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- REGULAR FEATURES SECTION --- */}
            <section className="featuresCategory">
                <h2 className="sectionTitle">Our Features</h2>
                <div className="interactiveFeatureContainer">
                    <div className="featuresSidebar">
                        {regularFeatures.map((feature, index) => (
                            <button
                                key={index}
                                className={`featureTitleBtn ${activeRegIdx === index ? 'active' : ''}`}
                                onClick={() => setActiveRegIdx(index)}
                            >
                                {feature.title}
                            </button>
                        ))}
                    </div>
                    <div className="featureDisplay">
                        <div className="displayContent animateReveal" key={activeRegIdx}>
                            <div className="previewArea">{regularFeatures[activeRegIdx].preview}</div>
                            <h3>{regularFeatures[activeRegIdx].title}</h3>
                            <p>{regularFeatures[activeRegIdx].description}</p>
                            <button className="tryDemoBtn" onClick={() => onNavigate('editor')}>Try Demo</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;
