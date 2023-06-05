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

    const options = ["Version Specific", "Version Range", "Version From", "Version To"]
    const [selectedOption, setSelectedOption] = useState("Version Specific");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, setter: any) => {
        e.preventDefault();
        setter(e.target.value);
    };

    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        
        setSelectedOption(event.target.value);
    };

    const handleSearch = (dependencyName: string, fromVersion: string, toVersion: string) => {
        console.log(`d: ${dependencyName} f: ${fromVersion} t: ${toVersion}`);
        if (dependencyName === '') {
            setErrorMessage("Not all fields have been filled in!");
            return;
        }
        if (
            (selectedOption === "Version Specific" || selectedOption === "Version Range") &&
            (fromVersion === '' || toVersion === '')
        ) {
            setErrorMessage("Not all fields have been filled in!");
            return;
        }
        if (
            (selectedOption === "Version From" && fromVersion === '') ||
            (selectedOption === "Version To" && toVersion === '')
        ) {
            setErrorMessage("Not all fields have been filled in!");
            return;
        }
        setErrorMessage("");
        async function fetchData() {
            try {
                const results = (await SearchDependency(dependencyName, fromVersion, toVersion));
                props.searchResults(results);
            } catch (error) {
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
                    <select value={selectedOption} onChange={handleOptionChange}>
                        {options.map((option, id) => (
                            <option key={id} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                {selectedOption === "Version Range" ? ( // Conditional rendering based on selectedOption
                    <VersionRange
                        setFromVersion={setFromVersion}
                        setToVersion={setToVersion}
                        fromVersion={fromVersion}
                        toVersion={toVersion}
                    />
                ) : selectedOption === "Version From" ? (
                    <SearchBar
                        label="From Version:"
                        placeholder="Search from version..."
                        onSearch={(query) => setFromVersion(query)}
                    />
                ) : selectedOption === "Version To" ? (
                    <SearchBar
                        label="To Version:"
                        placeholder="Search up to version.."
                        onSearch={(query) => setToVersion(query)}
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