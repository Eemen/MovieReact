import React, { useEffect, useState } from "react";
import { fetchGenreMovies } from "../utils/api";

const MovieSlider = ({ onMovieClick }) => {
    const [moviesByGenre, setMoviesByGenre] = useState({
        action: [],
        drama: [],
        comedy: [],
        horror: [],
    });

    useEffect(() => {
        const fetchMovies = async () => {
            const actionMovies = await fetchGenreMovies("action");
            const dramaMovies = await fetchGenreMovies("drama");
            const comedyMovies = await fetchGenreMovies("comedy");
            const horrorMovies = await fetchGenreMovies("horror");
            setMoviesByGenre({
                action: actionMovies,
                drama: dramaMovies,
                comedy: comedyMovies,
                horror: horrorMovies,
            });
        };
        fetchMovies();
    }, []);

    return (
        <div className="movie-slider-wrapper">
            <h2>Genres</h2>
            {Object.entries(moviesByGenre).map(([genre, movies]) => (
                <div key={genre} className="movie-slider">
                    <h3>{genre.toUpperCase()}</h3>
                    <div className="slider">
                        {movies.map((movie) => (
                            <div
                                key={movie.imdbID}
                                className="movie-item"
                                onClick={() => onMovieClick(movie)}
                            >
                                <img src={movie.Poster} alt={movie.Title} />
                                <p>{movie.Title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MovieSlider;