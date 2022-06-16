import React from "react";
import styled from "styled-components";

const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0px;
  border-radius: 6px;
  margin: 0 20px;
  width: 100%;
  background-color: white;
`;

const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;

const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
`;

const SearchBarComponent = (props) => {
  return (
    <SearchBox>
      <SearchIcon src="../search-icon.svg" />
      <SearchInput
        placeholder="Search Movie"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
      />
    </SearchBox>
  );
};
export default SearchBarComponent;