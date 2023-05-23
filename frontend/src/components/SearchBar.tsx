import React, { useState } from "react";

interface SearchBarProps {
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
            <input
                type = "text"
                placeholder="Search here"
                onChange={handleChange}
                onKeyDown={(e) => {
                    if (e.key === "Enter") 
                        {handleSearch()}
                    }
                }
                value={searchInput}
            />
            <button onClick={handleSearch}> Search </button>
        </div>
    )
}

export default SearchBar;