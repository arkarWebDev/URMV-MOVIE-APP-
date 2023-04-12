import CardContainer from "../components/CardContainer";
import Header from "../components/Header";

function Upcoming() {
  return (
    <>
      <Header />
      <CardContainer
        title={"Upcoming Movie"}
        url={
          "https://api.themoviedb.org/3/movie/upcoming?api_key=72a814220967e9899c058deb9f37ed4a&language=en-US"
        }
      />
    </>
  );
}

export default Upcoming;
