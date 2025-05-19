"use client";

import { Movie } from "@/type/movie";
import Link from "next/link";
import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Card({ movie }: { movie: Movie }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {isLoading ? (
        <div className="relative inline-block rounded-lg overflow-hidden m-1 cursor-pointer min-w-[200px] h-[300px] z-0 transition-transform duration-200 border border-gray-600 hover:scale-125 hover:z-[1000] hover:shadow-[0px_54px_55px_rgba(0,0,0,0.25),0px_-12px_30px_rgba(0,0,0,0.12),0px_4px_6px_rgba(0,0,0,0.12),0px_12px_13px_rgba(0,0,0,0.17),0px_-3px_5px_rgba(0,0,0,0.09)]">
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link href={`/movie/${movie.id}`}>
          <div className="relative inline-block rounded-lg overflow-hidden m-1 cursor-pointer min-w-[200px] h-[300px] z-0 transition-transform duration-200 border border-gray-600 hover:scale-125 hover:z-[1000] hover:shadow-[0px_54px_55px_rgba(0,0,0,0.25),0px_-12px_30px_rgba(0,0,0,0.12),0px_4px_6px_rgba(0,0,0,0.12),0px_12px_13px_rgba(0,0,0,0.17),0px_-3px_5px_rgba(0,0,0,0.09)]">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              className="h-[300px] w-full object-cover"
              alt="Movie Poster"
            />
            <div className="absolute bottom-0 p-4 pt-0 h-[290px] flex flex-col w-full justify-end bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-200">
              <h4 className="font-extrabold text-lg mb-1">
                {movie.original_title}
              </h4>
              <h5 className="flex items-center gap-1 text-sm mb-1">
                {movie.release_date} / ⭐ {movie.vote_average}
              </h5>
              <p className="italic text-sm mb-1 w-[85%]">
                {movie.overview.slice(0, 50) + "..."}
              </p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}
