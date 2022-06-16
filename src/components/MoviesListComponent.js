import styled from "styled-components";

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 300px;
  background-color: white;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
 */
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 150px;
`;
const MovieName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
`;
const MoviesListComponent = (props) => {
  const { title, release_date, id, poster_path } = props.movie;
  return (

    <MovieContainer
      onClick={() => {
        props.onMovieSelect(id);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      {props.movie ? (
        <>
          <CoverImage src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title} />
          <MovieName>{title}</MovieName>
          <InfoColumn>
            <MovieInfo>Year : {release_date}</MovieInfo>
            {/* <MovieInfo>Type : {Type}</MovieInfo> */}
          </InfoColumn>
        </>
      ) : (
        "Loading..."
    )}
    </MovieContainer>
  );
};
export default MoviesListComponent;