import logo from "./logo.svg";
import "./App.css";
import Row from "./Row";
import { requests } from "./request";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGNALS"
        fetchUrl={requests.fetchNetflixOrignals}
        isLargerRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row
        title="Documentary Movies"
        fetchUrl={requests.fetchDocumentariesMovies}
      />
    </div>
  );
}
// 359096e5fb2f80f1ea071a56e607168c
export default App;
