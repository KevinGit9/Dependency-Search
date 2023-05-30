import React, { useEffect, useState } from "react";
import SearchResult from "./SearchResult";
import "./ResultsBox.css";

interface ResultsBoxProps {
    searchResults: any[];
}

function ResultsBox(props: ResultsBoxProps) {
    const [results, setResults] = useState<any>([]);
    let resultsCount: number = props.searchResults.length;
    //setResults(props.searchResults);

    return (
        <div className="resultsBoxPanel">
            <h1> Search Results </h1>
            <div className="resultsBorder">
                <h3> {resultsCount} Projects Found</h3>
                <div className="resultsPanel">
                    {props.searchResults.map((result: { projectName: string; dependency: string; version: string; }, index: React.Key | null | undefined) => {
                        return(<SearchResult key={index} projectName={result.projectName} dependency={result.dependency} version={result.version}/>)
                    })}
                </div>
            </div>

        </div>
    );
};

export default ResultsBox;