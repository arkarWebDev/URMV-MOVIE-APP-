import Header from "../components/Header";
import CardContainer from "../components/CardContainer";

function Popular() {
  return (
    <>
      <Header />
      <CardContainer
        title={"Popular Now"}
        url={
          "https://api.themoviedb.org/3/movie/popular?api_key=72a814220967e9899c058deb9f37ed4a&language=en-US"
        }
      />
    </>
  );
}

export default Popular;
