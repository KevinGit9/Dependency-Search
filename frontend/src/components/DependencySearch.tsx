import React, { useState } from "react";
import VersionRange from "./VersionRange";
import SearchBar from "./SearchBar";


function DependencySearch() {
    const [dependencyName, setDependencyName] = useState('');
    const [fromVersion, setFromVersion] = useState('');
    const [toVersion, setToVersion] = useState('');
    const [range, setRange] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, setter: any) => {
        e.preventDefault();
        setter(e.target.value);
    };

    const handleSearch = (dependencyName: string, fromVersion: string, toVersion: string) => {
        // API call
        console.log(`dependency name: ${dependencyName}, from version: ${fromVersion}, to version: ${toVersion}`);
    };

    return (
        <div>
            <label>
                Dependency Name:
                <input
                    type="text"
                    placeholder="Search dependency..."
                    onChange={(e) => handleChange(e, setDependencyName)}
                    value={dependencyName}
                />
            </label>

            <div>
                <button onClick={() => setRange(false)}> Version Specific </button>
                <button onClick={() => setRange(true)}> Version Range </button>
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

            <button onClick={() => handleSearch(dependencyName, fromVersion, toVersion)}> Search </button>
        </div>
    )
}

export default DependencySearch;