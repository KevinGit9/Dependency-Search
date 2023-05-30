import React from "react";
import "./SearchResult.css";

interface SearchResultProps {
    projectName: string;
    dependency: string;
    version: string;
}

function SearchResult(props: SearchResultProps) {
    return (
        <div className="searchResultPanel">
            <a> Project Name: {props.projectName} - Dependency: {props.dependency} - Version: {props.version} </a>
        </div>
    );
};

export default SearchResult;