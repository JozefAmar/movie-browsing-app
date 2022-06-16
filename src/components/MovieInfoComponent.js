import { useEffect, useState } from "react";
import Axios from "axios";
import { API_KEY } from "../App";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 30px;
  justify-content: center;
  border-bottom: 1px solid lightgray;
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 350px;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
const MovieName = styled.span`
  font-size: 22px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
  & span {
    opacity: 0.8;
  }
`;
const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  overflow: hidden;
  margin: 4px 0;
  text-transform: capitalize;
  text-overflow: ellipsis;

  & span {
    opacity: 0.5;
  }
`;

const MovieInfoComponent = (props) => {
    const [movieInfo, setMovieInfo] = useState();
    const { selectedMovie } = props;

    useEffect(() => {
        Axios.get(
            `https://api.themoviedb.org/3/movie/${selectedMovie}?api_key=${API_KEY}&language=en-US`,
        ).then((response) => (setMovieInfo(response.data)));
    }, [selectedMovie]);


    return (
        <Container>
            {movieInfo ? (
                <>
                    <CoverImage src={`https://image.tmdb.org/t/p/original${movieInfo.poster_path}`} alt={movieInfo?.title} />
                    <InfoColumn>
                        <MovieName>
                            Title: <span>{movieInfo.title}</span>
                        </MovieName>
                        <MovieInfo>
                            Overview: <span>{movieInfo.overview}</span>
                        </MovieInfo>
                        <MovieInfo>
                            Vote Average: <span>{movieInfo.vote_average} </span>
                            Vote Count: <span>{movieInfo.vote_count}</span>
                        </MovieInfo>
                        <MovieInfo>
                            Language: <span>{movieInfo.original_language.toUpperCase()}</span>
                        </MovieInfo>
                        <MovieInfo>
                            Released: <span>{movieInfo.release_date}</span>
                        </MovieInfo>
                    </InfoColumn>
                </>
            ) : (
                "Loading..."
            )}
        </Container>
    );
};
export default MovieInfoComponent;