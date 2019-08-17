import React from "react";

function CharacterCard(props) {
  console.log(props);
  return (
    <ul className="character-card">
      <li>{props.char.name}</li>
      <li>{props.char.birth_year}</li>
      <li>{props.char.eye_color}</li>
      <li>{props.char.gender}</li>
      <li>{props.char.hair_color}</li>
      <li>{props.char.skin_color}</li>
    </ul>
  );
}

export default CharacterCard;
