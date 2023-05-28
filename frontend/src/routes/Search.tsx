import React from "react";
import DependencySearch from "../components/DependencySearch";

function Search() {
    const handleSearch = (query: string) => {
        // Perform search logic with the query
        console.log('Performing search for:', query);
    };

    return (
        <div>
            <h1>Dependency Search</h1>
            <DependencySearch/>
            <div style={{ height: "2000px" }}>
            </div>
        </div>
    )
}

export default Search;