import React from "react";
import DependencySearch from "../components/DependencySearch";
import ResultsBox from "../components/ResultsBox";
import "./Search.css";

function Search() {
    const handleSearch = (query: string) => {
        // Perform search logic with the query
        console.log('Performing search for:', query);
    };

    return (
        <div className="searchPanel">
            <DependencySearch/>
            <ResultsBox/>
            <div style={{ height: "1000px" }}>
            </div>
        </div>
    )
}

export default Search;