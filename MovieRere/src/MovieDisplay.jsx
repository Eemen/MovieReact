import React from "react";

const MovieDisplay = ({ selectedMovie }) => {
    if (!selectedMovie) return null;

    return (
        <div className="api-wrapper">
            <div className="api-content-wrapper">
                <h1>{selectedMovie.Title}</h1>
                <p>{selectedMovie.Genre}</p>
                <p>{selectedMovie.Plot}</p>
            </div>
            <div className="api-img-wrapper">
                <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
            </div>
        </div>
    );
};

export default MovieDisplay;