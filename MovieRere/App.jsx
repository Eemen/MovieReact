import React, { useState } from "react";
import Header from "./components/Header";
import MovieDisplay from "./components/MovieDisplay";
import MovieSlider from "./components/MovieSlider";
import MoviePopup from "./components/MoviePopup";
import FloatingButton from "./components/FloatingButton";
import "./styles/index.css";

const App = () => {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (query) => {
        setSearchQuery(query);
        if (query) {
            const results = await fetchMoviesByPage(query, 1);
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    };

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="content-wrapper">
            <Header onSearch={handleSearch} />
            <MovieDisplay selectedMovie={selectedMovie} />
            <MovieSlider onMovieClick={handleMovieClick} />
            {searchResults.length > 0 && (
                <div className="movie-display-area">
                    {searchResults.map((movie) => (
                        <div key={movie.imdbID} className="movie-item">
                            <img
                                src={movie.Poster}
                                alt={movie.Title}
                                onClick={() => handleMovieClick(movie)}
                            />
                            <p>{movie.Title}</p>
                        </div>
                    ))}
                </div>
            )}
            {showPopup && (
                <MoviePopup movie={selectedMovie} onClose={closePopup} />
            )}
            <FloatingButton />
        </div>
    );
};

export default App;