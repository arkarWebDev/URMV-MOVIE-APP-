import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

function Searched() {
  const { title } = useParams();
  const [searchedMovies, setSearchedMovies] = useState([]);

  useEffect(() => {
    getSearchMovie();
    // eslint-disable-next-line
  }, [title]);

  const getSearchMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=72a814220967e9899c058deb9f37ed4a&language=en-US&query=${title}&page=1&include_adult=false`
    );
    const data = await response.json();
    setSearchedMovies(data.results);
  };

  return (
    <section className="px-8 my-10">
      <h1 className="text-4xl font-bold text-mono text-white">
        Search results for "{title}"
      </h1>
      <div className="grid grid-cols-10 gap-3 mt-4">
        {searchedMovies.length &&
          searchedMovies.map((movie) => {
            return <Card key={movie.id} movie={movie} />;
          })}
      </div>
    </section>
  );
}

export default Searched;
