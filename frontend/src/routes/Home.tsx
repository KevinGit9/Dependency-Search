import React from "react";
import "./Home.css"
import { Link } from "react-router-dom";

function Home() {
    const scrollHeight = 800;
    const scrollDown = () => {
        window.scrollTo({
            top: window.pageYOffset + scrollHeight,
            behavior: "smooth",
        });
    }

    return (
        <div>
            <div className="homepageContainer">
                <div className="textSection">
                    <h1>Welcome to Dependency Search!</h1>
                    <p>
                        Discovered a new vulnerability in a dependency? Use our tool to generate a full list of projects containing the dependency.
                    </p>
                    <div className="homeButtons">
                        <Link to="/search" onClick={window.location.reload}>
                            <button className="startButton"> Get Started </button>
                        </Link>
                        <button className="howButton" onClick={scrollDown}> How does it work? </button>
                    </div>
                </div>
                <div className="imageSection">
                    <div className="imageContainer">
                        <img src="containers.png" alt="Containers" className="homeImage" />
                    </div>
                </div>
            </div>
            <div style={{ height: "200px", background: "#257cd9" }} />
            <div style={{ height: "100vh", background: "#0E1822" }}>
                <div className="homepageSteps">
                    <h1> How does it work? </h1>
                    <div className="steps">
                        <div className="step">
                            <i className="fas fa-search fa-2x fa-lg"></i>
                            <h2> 1. Search for Dependencies </h2>
                            <p> Simply enter the name and version of the dependency you're interested in. </p>
                        </div>
                        <div className="step">
                            <i className="fas fa-list fa-2x fa-lg"></i>
                            <h2> 2. Find Relevant SBOMs </h2>
                            <p> Our tool will fetch all the SBOMs that contain the dependency you searched for from the database. </p>
                        </div>
                        <div className="step">
                            <i className="fas fa-lightbulb fa-2x fa-lg"></i>
                            <h2> 3. Export the Data </h2>
                            <p>
                                Export the list of projects containing the specified dependency. 
                                Gain insights, track dependencies, and make informed decisions when managing and maintaining your software projects.
                            </p>
                        </div>
                    </div>
                    <Link to="/search" onClick={window.location.reload}>
                        <button> Get Started </button>
                    </Link>
                </div>
            </div>
            <div style={{ height: "100vh" }} />
        </div>
    )
}

export default Home;