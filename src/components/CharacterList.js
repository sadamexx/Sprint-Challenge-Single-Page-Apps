import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row } from "reactstrap";
import CharacterCard from "./CharacterCard";


export default function CharacterList() {
  const [character, setCharacter] = useState ([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log(response);
        setCharacter(response.data.results);
      })
      .catch(error => {
        console.log ("The data was not returned", error);
      })
  }, []);

  return (
    <Container>
      <Row>
        {character.map((toon, index) => (
          <CharacterCard 
            key={index}
            image={toon.image} 
            name={toon.name} 
            gender={toon.gender}
            />
        ))}
      </Row>
    </Container>
  );
}
