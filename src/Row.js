import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const Row = ({ title, fetchUrl, isLargerRow }) => {
  const [movies, setMovies] = useState([]);
  const baseURL = "https://image.tmdb.org/t/p/original";
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fecthData() {
      const request = await axios.get(`${fetchUrl}`);
      console.log(request.data.results);
      setMovies(request.data.results);
      // return request;
    }
    fecthData();
  }, [fetchUrl]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoPlay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          console.log(urlParams.get("v"));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.length > 0 &&
          movies.map((movie) => {
            return (
              <img
                onClick={() => handleClick(movie)}
                key={movie?.id}
                className={`row_poster ${isLargerRow && "row_larger_poster"}`}
                src={`${baseURL}${
                  isLargerRow ? movie?.poster_path : movie?.backdrop_path
                }`}
                alt={movie?.name}
              />
            );
          })}
      </div>
      {trailerUrl && <YouTube opts={opts} videoId={trailerUrl} />}
    </div>
  );
};
export default Row;
