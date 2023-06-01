import React, { useState } from "react";
import VersionRange from "./VersionRange";
import SearchBar from "./SearchBar";
import "./DependencySearch.css";
import { SearchDependency } from "../services/DependencyService";

interface DependencySearchProps {
    searchResults: (query: any) => void;
}

function DependencySearch(props: DependencySearchProps) {
    const [dependencyName, setDependencyName] = useState('');
    const [fromVersion, setFromVersion] = useState('');
    const [toVersion, setToVersion] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [range, setRange] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, setter: any) => {
        e.preventDefault();
        setter(e.target.value);
    };

    const handleSearch = (dependencyName: string, fromVersion: string, toVersion: string) => {
        if (dependencyName === '' || fromVersion === '' || toVersion === '') {
            setErrorMessage("Not all fields have been filled in!");
            return;
        }
        setErrorMessage("");
        async function fetchData() {
            try {
                const results = (await SearchDependency(dependencyName, fromVersion, toVersion));
                props.searchResults(results);
            } catch(error) {
                console.log('An error occurred:', error);
            }
        }
        fetchData();
        scrollDown();
    };

    const resetVersions = () => {
        setFromVersion('');
        setToVersion('');
    }

    const scrollHeight = 0.25 * document.documentElement.scrollHeight;
    const scrollDown = () => {
        window.scrollBy({
            top: scrollHeight,
            behavior: 'smooth'
        });
    }

    return (
        <div className="dependencySearchPanel">
            <h1>Dependency Search</h1>
            <label>
                Dependency Name:
                <input
                    type="text"
                    placeholder="Search dependency..."
                    onChange={(e) => handleChange(e, setDependencyName)}
                    value={dependencyName}
                />
            </label>
            <div className="rangePanel">
                <div className="buttons-container">
                    <button className={range === false ? "active" : ""} onClick={() => { setRange(false); resetVersions() }}> Version Specific </button>
                    <button className={range === true ? "active" : ""} onClick={() => { setRange(true); resetVersions() }}> Version Range </button>
                </div>
                {range ? ( // if range is true VersionRange, else SearchBar
                    <VersionRange
                        setFromVersion={setFromVersion}
                        setToVersion={setToVersion}
                        fromVersion={fromVersion}
                        toVersion={toVersion}
                    />
                ) : (
                    <SearchBar
                        label="Version:"
                        placeholder="Search for version..."
                        onSearch={(query) => {
                            setFromVersion(query);
                            setToVersion(query);
                        }}
                    />
                )}
            </div>
            <div className="errorMessage">
                {errorMessage === '' ? (<p></p>) : (<p> {errorMessage} </p>)}
            </div>
            <button className="searchButton" onClick={() => handleSearch(dependencyName, fromVersion, toVersion)}> Search </button>
        </div>
    )
}

export default DependencySearch;