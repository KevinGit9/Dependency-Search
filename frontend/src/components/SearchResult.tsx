import React from "react";
import "./SearchResult.css";

interface SearchResultProps {
    projectName: string;
    dependency: string;
    version: string;
    purl: string;
}

function SearchResult(props: SearchResultProps) {
    return (
        <div className="searchResultPanel"> 
            <a> <strong>Project Name:</strong> {props.projectName} </a> 
            <div>
                <a> <strong>Dependency:</strong> {props.dependency} </a>
                <a> <strong>Version:</strong> {props.version} </a>
            </div>
            <a> <strong>PURL:</strong> {props.purl} </a>
        </div>
    );
};

export default SearchResult;