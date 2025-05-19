"use client";

import { useEffect, useState } from "react";
import { data } from "@/temp/data";
export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
}

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    setMovies(data.results);
  }, []);

  return (
    <div>
      <h1>메인 페이지</h1>
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
              <p>평점: {movie.vote_average}</p>
              <p>투표 수: {movie.vote_count}</p>
              <p>개봉일: {movie.release_date}</p>
              <p>장르: {movie.genre_ids.join(", ")}</p>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={200}
                height={300}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
