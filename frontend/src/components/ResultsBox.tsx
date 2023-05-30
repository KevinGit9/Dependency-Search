import React from "react";
import SearchResult from "./SearchResult";
import "./ResultsBox.css";

interface ResultsBoxProps {
    searchResults: any[][];
}

function ResultsBox(props: ResultsBoxProps) {
    let resultsCount: number = props.searchResults.length;

    return (
        <div className="resultsBoxPanel">
            <h1> Search Results </h1>
            <div className="resultsBorder">
                {resultsCount > 0 ?
                    (<h3> {resultsCount} Projects Found </h3>)
                    :
                    (<h3> No Projects Found </h3>)}
                <div className="resultsPanel">
                    <div>
                        {props.searchResults.map((innerArray, index) => (
                            <div key={index}>
                                <SearchResult
                                    key={index}
                                    projectName={innerArray[0]}
                                    dependency={innerArray[1]}
                                    version={innerArray[2]}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultsBox;