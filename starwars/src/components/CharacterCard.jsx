import React from "react";
import { Card } from "semantic-ui-react";
import "../App.css";

// they only have to have 1 character attribute

function CharacterCard(props) {
  console.log(props);
  return (
    <Card className="character-card">
      <Card.Content>
        <Card.Header>{props.char.name}</Card.Header>
        <Card.Description>{props.char.birth_year}</Card.Description>
        <Card.Description>{props.char.eye_color}</Card.Description>
        <Card.Description>{props.char.gender}</Card.Description>
        <Card.Description>{props.char.hair_color}</Card.Description>
        <Card.Description>{props.char.skin_color}</Card.Description>
      </Card.Content>
    </Card>
  );
}

export default CharacterCard;
