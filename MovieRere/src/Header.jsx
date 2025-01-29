import { useState } from "react";

const Header = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <div className="header-wrapper">
            <div className="img-wrapper">
                <img src="/public/Logo.png" alt="WolfFlix" />
            </div>
            <div className="search-wrapper">
                <input
                    type="text"
                    placeholder="Search in WolfFlix"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
        </div>
    );
};

export default Header;