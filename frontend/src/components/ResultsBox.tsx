import React from "react";
import SearchResult from "./SearchResult";
import "./ResultsBox.css";

function ResultsBox() {
    return (
        <div className="resultsBoxPanel">
            <div className="resultsBorder">
                <a> numberCount Projects Found</a>
                <div className="resultsPanel">
                    <SearchResult />
                    <SearchResult />
                    <SearchResult />
                </div>
            </div>

        </div>
    );
};

export default ResultsBox;