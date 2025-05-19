"use client";

import { useEffect, useState } from "react";
import { data } from "@/temp/data";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
  const [movieList, setMovieList] = useState<Movie[]>([]);

  useEffect(() => {
    setMovieList(data.results);
  }, []);

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex items-center">
          <Carousel
            showThumbs
            autoPlay
            infiniteLoop
            showStatus={false}
            transitionTime={5}
          >
            {movieList.map((movie) => (
              <Link href={`/detail/${movie.id}`} className="relative">
                <div className="h-[900px]">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    alt="썸네일"
                    className="block"
                  />
                </div>
                <div className="absolute bottom-0 w-full text-left p-20 bg-gradient-to-t from-black to-transparent text-white">
                  <h5 className="text-4xl">{movie.original_title}</h5>
                  <p className="text-base felx items-center gap-3 my-5">
                    {movie.release_date} / 🌟 {movie.vote_average}
                  </p>
                  <p className="italic w-4/6">{movie.orverview}</p>
                </div>
              </Link>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}
