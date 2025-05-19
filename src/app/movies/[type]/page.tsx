"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Card from "@/components/Card";
import { Movie } from "@/type/movie";

export default function MovieTypePage() {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const param = useParams();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${param.type}?language=ko-KR&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data.results);
      });
  }, []);

  return (
    <div className="p-12">
      {/* <SearBox keyword={keyword} onChangeKeyword={onChangeKeyword} /> */}
      <h2 className="text-xl my-10">영화목록</h2>
      <div className="flex flex-wrap justify-center">
        {movieList
          //   .filter((movie) =>
          //     movie.original_title.toLowerCase().includes(keyword.toLowerCase())
          //   )
          .map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
}
