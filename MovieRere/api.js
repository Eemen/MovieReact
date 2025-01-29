const apiKey = "5206816f"; // Replace with your actual API key

export const fetchGenreMovies = async (genre) => {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${apiKey}&s=${genre}&type=movie`
  );
  const data = await response.json();
  return data.Search || [];
};

export const fetchMoviesByPage = async (title, page) => {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${apiKey}&s=${title}&page=${page}&type=movie`
  );
  const data = await response.json();
  return data.Search || [];
};