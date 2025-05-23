import React from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
    return (
        <nav className="header">
            <h1 className="header-title">ReelTrack</h1>
            <div className="header-buttons">
                <a href="#"> Add Movie </a>
                <a href="#"> Watched </a>
                <a href="#"> Watch List </a>
            </div>
            <div className="header-links">
                <a 
                    href="https://github.com/jerometaruc/reeltrack" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    View on GitHub
                </a>
            </div>
        </nav>
    );
};

export default Header;
