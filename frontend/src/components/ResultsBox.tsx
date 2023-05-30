import React, { useEffect, useState } from "react";
import SearchResult from "./SearchResult";
import "./ResultsBox.css";

interface ResultsBoxProps {
    searchResults: any[];
}

function ResultsBox(props: ResultsBoxProps) {
    const [results, setResults] = useState<any>([]);
    setResults(props.searchResults);

    return (
        <div className="resultsBoxPanel">
            <h1> Search Results </h1>
            <div className="resultsBorder">
                <h3> "numberCount" Projects Found</h3>
                <div className="resultsPanel">
                    {results.map((result: { projectName: string; dependency: string; version: string; }, index: React.Key | null | undefined) => {
                        return(<SearchResult key={index} projectName={result.projectName} dependency={result.dependency} version={result.version}/>)
                    })}
                </div>
            </div>

        </div>
    );
};

export default ResultsBox;