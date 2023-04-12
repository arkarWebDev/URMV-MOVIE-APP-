import { PlayIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function Card({ movie }) {
  return (
    <Link
      className="rounded-lg overflow-hidden relative"
      to={`/details/${movie.id}`}
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={movie.original_title}
        className="w-full object-cover"
      />
      <div className="dark-ov"></div>
      <PlayIcon className="play-ic" />
    </Link>
  );
}

export default Card;
