import React from "react";

const MoviePopup = ({ movie, onClose }) => {
    if (!movie) return null;

    return (
        <div className="popup">
            <div className="popup-content">
                <span className="close-btn" onClick={onClose}>
                    &times;
                </span>
                <h2>{movie.Title}</h2>
                <p><strong>Year:</strong> {movie.Year}</p>
                <p><strong>Rated:</strong> {movie.Rated}</p>
                <p><strong>Released:</strong> {movie.Released}</p>
                <p><strong>Runtime:</strong> {movie.Runtime}</p>
                <p><strong>Genre:</strong> {movie.Genre}</p>
                <p><strong>Director:</strong> {movie.Director}</p>
                <p><strong>Writer:</strong> {movie.Writer}</p>
                <p><strong>Actors:</strong> {movie.Actors}</p>
                <p><strong>Plot:</strong> {movie.Plot}</p>
                <img src={movie.Poster} alt={movie.Title} />
            </div>
        </div>
    );
};

export default MoviePopup;