import React, { useState, useEffect } from "react";
import CharacterCard from "./components/CharacterCard";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";
import image from "./sw-bg.jpg";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background-image: url(${image});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
`;

const StyledApp = styled.div`
  text-align: center;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Header = styled.h1`
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
`;

const Grid = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characterData, setCharacterData] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(res => {
        console.log(res);
        setCharacterData(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  if (!characterData) return <h1>LOADING...</h1>;
  return (
    <StyledApp>
      <Header>React Wars</Header>
      <Grid>
        {characterData.map(char => {
          return (
            <CharacterCard
              name={char.name}
              birthYear={char.birth_year}
              gender={char.gender}
              hairColor={char.hair_color}
              skinColor={char.skin_color}
            />
          );
        })}
      </Grid>
      <GlobalStyle />
    </StyledApp>
  );
};

export default App;
