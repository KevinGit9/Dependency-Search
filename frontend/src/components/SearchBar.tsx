import React, { useState } from "react";

interface SearchBarProps {
    label: string;
    placeholder: string;
    searchInput: any;
    onSearch: (query: string) => void;
}

function SearchBar(search: SearchBarProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        search.onSearch(e.target.value);
    };

    return (
        <div>
            <label>
                {search.label}
                <input
                    type="text"
                    placeholder={search.placeholder}
                    onChange={handleChange}
                    value={search.searchInput}
                />
            </label>
        </div>
    )
}

export default SearchBar;