"use client";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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

export default function MoviePage() {
  const param = useParams();

  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${param.id}?language=ko-KR&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, []);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="w-4/5">
        <div className="backdrop w-full">
          <img
            src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
            alt="포스터 사진"
            className="w-full h-[600px] object-cover object-[0_35%]"
          />
        </div>
      </div>
      <div className="relative flex w-3/4 items-center bottom-[225px] bg-black">
        <div className="mr-8">
          <div className="poster">
            <img
              src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
              alt="포스터 사진"
              className="w-[300px] rounded-[10px] shadow-[rgba(0,0,0,0.86)_0px_22px_40px_6px]"
            />
          </div>
        </div>
        <div>
          <div>
            <h5 className="text-3xl mb-4">{movie.original_title}</h5>
            <p className="flex items-center gap-2 mb-2">
              <span className="flex items-center gap-1">
                ⭐ {movie.vote_average}
              </span>
              <span>/</span>
              <span>🎥 {movie.runtime + " 분"}</span>
            </p>
            <div className="flex gap-4 my-5">
              {movie.genres.map((genre) => (
                <p
                  key={genre.id}
                  className="px-2 py-1 border-2 border-white rounded-full"
                >
                  {genre.name}
                </p>
              ))}
            </div>
          </div>
          <div className="my-10">
            <h5 className="text-xl mb-6">소개글(Synopsis)</h5>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
