import { useEffect, useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import MoviesListComponent from "./components/MoviesListComponent";
import MovieInfoComponent from "./components/MovieInfoComponent";
import SearchBarComponent from "./components/SearchBarComponent";

export const API_KEY = process.env.REACT_APP_THEMOVIEDB_API_KEY;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: gray;
  height:100% ;
  width: 350px;
  padding: 10px;
  box-shadow: 0 3px 6px 0 #555;
`;


const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly;;
`;

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();

  useEffect(() => {
    Axios
      .get("/db/movies.json")
      .then((response) => updateMovieList(response.data.results))
      .catch((err) => console.log(err));
  }, []);

  const getMovie = async (searchString) => {
    await Axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchString}`,
    )
      .then((response) => updateMovieList(response.data.results))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (searchValue !== '') getMovie(searchValue);
  }, [searchValue]);

  return (
    <Container>
      <Header>
        <SearchBarComponent setSearchValue={setSearchValue} />
        <MovieListContainer>
          {movieList.length ? (
            movieList.map((movie, index) => (
              <MoviesListComponent
                key={index}
                movie={movie}
                onMovieSelect={onMovieSelect}
              />
            ))
          ) : (
            <div>We can't find a movie with this title.</div>
          )}
        </MovieListContainer>
      </Header>
      {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect} />}
    </Container>
  );
}

export default App;