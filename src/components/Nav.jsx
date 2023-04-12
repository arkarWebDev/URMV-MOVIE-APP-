import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Nav() {
  const [searchKey, setSearchKey] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    navigate(`/search/${searchKey}`);
  };

  return (
    <nav className="flex items-center justify-between bg-black text-white px-10 py-4">
      <NavLink to={"/"} className="text-5xl font-bold font-mono ">
        URMV
      </NavLink>
      <div className="flex items-center space-x-3">
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-text" : "non-active-text"
          }
          to={"/"}
        >
          Pouplar
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-text" : "non-active-text"
          }
          to={"/upcoming"}
        >
          Upcoming
        </NavLink>
      </div>
      <form className="flex items-center justify-center" onSubmit={search}>
        <input
          type="text"
          className="text-xl bg-transparent border-b-2 border-b-slate-300 focus:outline-none w-2/3"
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button type="submit">
          <MagnifyingGlassIcon className="w-8 h-8" />
        </button>
      </form>
    </nav>
  );
}

export default Nav;
