import Nav from "../components/Nav";
import { Routes, Route } from "react-router-dom";
import Popular from "../pages/Popular";
import Upcoming from "../pages/Upcoming";
import Details from "../pages/Details";
import Searched from "../pages/Searched";

function Main() {
  return (
    <section>
      <Nav />
      <Routes>
        <Route index element={<Popular />} />
        <Route element={<Upcoming />} path="/upcoming" />
        <Route element={<Details />} path="/details/:id" />
        <Route element={<Searched />} path="/search/:title" />
      </Routes>
    </section>
  );
}

export default Main;
