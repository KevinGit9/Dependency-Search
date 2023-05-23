import React from "react";
import SearchBar from "../components/SearchBar";

function DependencySearch() {
    const handleSearch = (query: string) => {
        // Perform search logic with the query
        console.log('Performing search for:', query);
    };

    return (
        <div>
            <h1>Dependency Search</h1>
            <SearchBar onSearch={handleSearch}></SearchBar>
        </div>
    )
}

export default DependencySearch;