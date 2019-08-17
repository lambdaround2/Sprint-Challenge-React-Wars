import React from "react";
import { Card } from "semantic-ui-react";
import "../App.css";

// they only have to have 1 character attribute

function CharacterCard(props) {
  console.log(props);
  return (
    <Card className="character-card">
      <Card.Content>
        <Card.Header className="card-header">{props.char.name}</Card.Header>

        <Card.Description className="char-attributes">
          <span>Birth Year:</span>
          {props.char.birth_year}
        </Card.Description>
        <Card.Description className="char-attributes">
          <span>Eye Color:</span>
          {props.char.eye_color}
        </Card.Description>
        <Card.Description className="char-attributes">
          <span>Gender:</span>
          {props.char.gender}
        </Card.Description>
        <Card.Description className="char-attributes">
          <span>Hair Color:</span>
          {props.char.hair_color}
        </Card.Description>
        <Card.Description className="char-attributes">
          <span>Skin Color:</span>
          {props.char.skin_color}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default CharacterCard;
