import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import HeaderCard from "./HeaderCard";
import { useEffect, useState } from "react";

const Header = () => {
  const [relatedMovies, setRelatedMovies] = useState([]);

  useEffect(() => {
    getRelatedMovies();
  }, []);

  const getRelatedMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=72a814220967e9899c058deb9f37ed4a&language=en-US"
    );
    const data = await response.json();
    setRelatedMovies(data.results);
  };

  return (
    <section className="">
      <Splide
        options={{
          type: "loop",
          arrows: false,
          autoplay: true,
          interval: 2000,
        }}
      >
        {relatedMovies.map((movie) => {
          return (
            <SplideSlide key={movie.id}>
              <HeaderCard movie={movie} />
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
};

export default Header;
