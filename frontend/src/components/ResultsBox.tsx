import React from "react";
import SearchResult from "./SearchResult";
import "./ResultsBox.css";

function ResultsBox() {
    return (
        <div className="resultsBoxPanel">
            <h1> Search Results </h1>
            <div className="resultsBorder">
                <h3> "numberCount" Projects Found</h3>
                <div className="resultsPanel">
                    <SearchResult />
                    <SearchResult />
                    <SearchResult />
                    <SearchResult />
                    <SearchResult />
                    <SearchResult />
                    <SearchResult />
                    <SearchResult />
                    <SearchResult />
                    <SearchResult />
                    <SearchResult />
                    <SearchResult />
                </div>
            </div>

        </div>
    );
};

export default ResultsBox;