import React, { useState } from "react";
import DependencySearch from "../components/DependencySearch";
import ResultsBox from "../components/ResultsBox";
import "./Search.css";

function Search() {
    const [results, setResults] = useState<any>([]);

    return (
        <div className="searchPanel">
            <DependencySearch searchResults={setResults}/>
            <ResultsBox searchResults={results}/>
            <div style={{ height: "1000px" }}>
            </div>
        </div>
    )
}

export default Search;