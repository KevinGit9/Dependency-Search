import React, { Children, useState } from "react";
import VersionRange from "./VersionRange";
import SearchBar from "./SearchBar";
import "./DependencySearch.css";

function DependencySearch() {
    const [dependencyName, setDependencyName] = useState('');
    const [fromVersion, setFromVersion] = useState('');
    const [toVersion, setToVersion] = useState('');
    const [errorMessage, setErrorMessage] = useState(false);
    const [range, setRange] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, setter: any) => {
        e.preventDefault();
        setter(e.target.value);
    };

    const handleSearch = (dependencyName: string, fromVersion: string, toVersion: string) => {
        // API call
        if (dependencyName === '' || fromVersion === '' || toVersion === '') {
            setErrorMessage(true);
            return;
        }
        setErrorMessage(false);
        console.log(`dependency name: ${dependencyName}, from version: ${fromVersion}, to version: ${toVersion}`);
        scrollDown();
    };

    const scrollHeight = 0.23 * document.documentElement.scrollHeight;
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
                    <button className={range === false ? "active" : ""} onClick={() => setRange(false)}> Version Specific </button>
                    <button className={range === true ? "active" : ""} onClick={() => setRange(true)}> Version Range </button>
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
                {errorMessage ? (<p> Not all fields have been filled in! </p>) : (<p></p>)}
            </div>
            <button className="searchButton" onClick={() => handleSearch(dependencyName, fromVersion, toVersion)}> Search </button>
        </div>
    )
}

export default DependencySearch;