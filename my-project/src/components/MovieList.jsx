import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import HrMovieCard from "./HrMovieCard";

const MovieList = ({ genreId, index_ }) => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);

  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };
  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };
  const slideRight = (element) => {
    element.scrollLeft += 500;
  };

  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef.current)}
        className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute ${
          index_ % 3 == 0 ? "mt-[75px]" : "mt-[150px]"
        } `}
      />

      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-8 scrollbar-none px-3 py-5 scroll-smooth"
      >
        {movieList.map((item, index) => (
          <>
            {index_ % 3 === 0 ? (
              <HrMovieCard movie={item} />
            ) : (
              <MovieCard movie={item} key={index} />
            )}
          </>
        ))}
        <div>
          <IoChevronForwardOutline
            onClick={() => slideRight(elementRef.current)}
            className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute ${
              index_ % 3 == 0 ? "mt-[50px]" : "mt-[150px]"
            } right-0`}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieList;
