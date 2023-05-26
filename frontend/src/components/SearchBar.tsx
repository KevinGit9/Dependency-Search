import React, { useState } from "react";

interface SearchBarProps {
    label: string;
    onSearch: (query: string) => void;
}

function SearchBar(search: SearchBarProps) {
    const [searchInput, setSearchInput] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    const handleSearch = () => {
        search.onSearch(searchInput);
    };

    return (
        <div>
            <label>
                {search.label}
                <input
                    type="text"
                    placeholder="Search here"
                    onChange={handleChange}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") { handleSearch() }
                    }}
                    value={searchInput}
                />
            </label>
        </div>
    )
}

export default SearchBar;