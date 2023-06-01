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
            <a> Project Name: {props.projectName} </a>  
            <a> Dependency: {props.dependency} </a>
            <a> Version: {props.version} </a>
        </div>
    );
};

export default SearchResult;