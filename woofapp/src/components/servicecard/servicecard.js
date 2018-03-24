import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle
}
from 'reactstrap';

const ServiceCard = (props) => {
    return (
        <div>
      <Card>
        <CardImg top width="100%" src="{props.cardImg}" alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.cardTitle}</CardTitle>
          <CardText>{props.cardText}</CardText>
        </CardBody>
      </Card>
    </div>
    );
};

export default ServiceCard;
