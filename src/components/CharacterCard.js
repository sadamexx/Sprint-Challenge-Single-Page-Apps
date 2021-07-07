import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col
} from "reactstrap";

const CharacterCard = props => {
  console.log(props);
  return (
    <Col xs="12" s="6" md="4">
      <Card className="card-main">
        <CardImg
          top
          width="100%"
          src={props.image}
          alt={props.name}
        />
        <CardBody className="card-container">
          <CardTitle className="name">Name: {props.name}</CardTitle>
          <CardSubtitle>Gender: {props.gender}</CardSubtitle>
        </CardBody>
      </Card>
    </Col>
  );
};
export default CharacterCard;
