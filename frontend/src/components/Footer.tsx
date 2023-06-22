import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footerHeader">
                <a
                    href="https://github.com/KevinGit9/Dependency-Search"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                >
                    <img
                        src="github-logo.png"
                        alt="GitHub Logo"
                    />
                </a>
                <div className="footerText">
                    <h1> Team Random </h1>
                    <p> This application is a prototype to search for specific dependencies in projects by looking through SBOMs. </p>
                </div>
            </div>
            <div style={{ height: "200px" }}>
                <div className="footerPanel">
                    <div className="developers">
                        <h2>Developers:</h2>
                        <ul>
                            <li>Anton Shi</li>
                            <li>Kevin Shi</li>
                            <li>Tobias Zelders</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
