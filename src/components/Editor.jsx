import { useState } from 'react';
import './Editor.css';

/**
 * The core Editor component.
 * Handles the dual-phase flow: Upload and then AI-assisted Editing.
 */
const Editor = ({ onExit }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [videos, setVideos] = useState([]);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [isApplying, setIsApplying] = useState(false);
    const [appliedSuggestion, setAppliedSuggestion] = useState(null);

    const currentVideoUrl = (videos.length > 0 && videos[currentVideoIndex])
        ? URL.createObjectURL(videos[currentVideoIndex])
        : null;

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setVideos(prev => [...prev, ...selectedFiles]);
    };

    const removeFile = (index) => {
        setVideos(prev => {
            const newVideos = prev.filter((_, i) => i !== index);
            if (currentVideoIndex >= newVideos.length && newVideos.length > 0) {
                setCurrentVideoIndex(newVideos.length - 1);
            }
            return newVideos;
        });
    };

    const nextVideo = () => {
        if (currentVideoIndex < videos.length - 1) {
            setCurrentVideoIndex(prev => prev + 1);
        }
    };

    const prevVideo = () => {
        if (currentVideoIndex > 0) {
            setCurrentVideoIndex(prev => prev - 1);
        }
    };

    const handleSubmit = () => {
        if (videos.length > 0) {
            setIsSubmitted(true);
        } else {
            alert("Please upload at least one video to get started.");
        }
    };

    const handleApplySuggestion = (type) => {
        setIsApplying(type);
        setTimeout(() => {
            setIsApplying(false);
            setAppliedSuggestion(type);
            setTimeout(() => setAppliedSuggestion(null), 3000);
        }, 2000);
    };

    // Phase 1: The Upload Interface
    if (!isSubmitted) {
        return (
            <div className="uploadContainer">

                <div className="uploadCard animateReveal">
                    <div className="uploadIcon">🎬</div>
                    <h2>Start Your Project</h2>
                    <p>Upload your video files to begin the AI-powered editing experience.</p>

                    <div className="fileInputWrapper">
                        <input
                            type="file"
                            multiple
                            accept="video/*"
                            onChange={handleFileChange}
                            id="videoUpload"
                        />
                        <label htmlFor="videoUpload" className="fileLabel">
                            {videos.length > 0 ? "You can upload multiple videos" : "Choose Video Files"}
                        </label>
                    </div>

                    {videos.length > 0 && (
                        <div className="fileList">
                            {videos.map((file, idx) => (
                                <div key={idx} className="fileItem">
                                    <span className="fileName">{file.name}</span>
                                    <button className="removeFileBtn" onClick={() => removeFile(idx)}>✕</button>
                                </div>
                            ))}
                        </div>
                    )}

                    <button className="submitBtn" onClick={handleSubmit}>
                        Process with AI Assistant
                    </button>
                </div>
            </div>
        );
    }

    // Phase 2: The Editor Interface
    return (
        <div className="editorWorkspace animateReveal">
            {/* Left Side: Video Preview */}
            <div className="videoSection">
                {videos.length > 1 && (
                    <div className="videoSectionHeader">
                        <div className="videoNavControls">
                            <button
                                className={`navBtn prev ${currentVideoIndex === 0 ? 'disabled' : ''}`}
                                onClick={prevVideo}
                                disabled={currentVideoIndex === 0}
                            >
                                ‹
                            </button>
                            <div className="videoDropdownWrapper">
                                <select
                                    className="videoSelectDropdown"
                                    value={currentVideoIndex}
                                    onChange={(e) => setCurrentVideoIndex(parseInt(e.target.value))}
                                >
                                    {videos.map((file, idx) => (
                                        <option key={idx} value={idx}>
                                            {file.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <button
                                className={`navBtn next ${currentVideoIndex === videos.length - 1 ? 'disabled' : ''}`}
                                onClick={nextVideo}
                                disabled={currentVideoIndex === videos.length - 1}
                            >
                                ›
                            </button>
                        </div>
                    </div>
                )}
                <div className="videoPlayerMock">
                    {currentVideoUrl ? (
                        <video key={currentVideoIndex} className="actualVideo" controls src={currentVideoUrl} autoPlay muted />
                    ) : (
                        <div className="mockOverlay">
                            <div className="playBtn">▶</div>
                        </div>
                    )}
                </div>
            </div>

            {/* Right Side: AI Assistant */}
            <div className="aiAssistantSection">
                <div className="aiHeader">
                    <div className="aiStatus">
                        <span className="statusDot"></span>
                        AI Assistant Ready
                    </div>
                    <button className="exitEditorBtn" onClick={onExit}>Exit Editor</button>
                </div>
                <div className="aiChatBody">
                    <div className="aiMessage">
                        Hello! I've analyzed your {videos.length} uploaded video(s). How can I help you edit them today?
                    </div>
                    <div className="aiSuggestion">
                        <div className="suggestionText">
                            <strong>Suggestion:</strong> I noticed some silence at 0:42. Should I trim it?
                        </div>
                        <div className="suggestionActions">
                            <button
                                className={`suggestionBtn trim ${isApplying === 'trim' ? 'loading' : ''} ${appliedSuggestion === 'trim' ? 'success' : ''}`}
                                onClick={() => handleApplySuggestion('trim')}
                                disabled={isApplying}
                            >
                                {isApplying === 'trim' ? 'Trimming...' : appliedSuggestion === 'trim' ? '✓ Trimmed' : 'Auto Trim'}
                            </button>
                            <button className="suggestionBtn secondary" disabled={isApplying}>Ignore</button>
                        </div>
                    </div>
                </div>
                <div className="aiChatInput">
                    <input type="text" placeholder="Ask AI to edit..." />
                    <button className="sendBtn">Send</button>
                </div>
            </div>
        </div>
    );
};

export default Editor;
