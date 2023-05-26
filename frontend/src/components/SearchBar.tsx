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
        search.onSearch(e.target.value);
    };


    return (
        <div>
            <label>
                {search.label}
                <input
                    type="text"
                    placeholder="Search here"
                    onChange={handleChange}
                    value={searchInput}
                />
            </label>
        </div>
    )
}

export default SearchBar;