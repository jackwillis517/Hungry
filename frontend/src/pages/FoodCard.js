import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import "./FoodCard.css";

class FoodCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (   
            <Col xs="auto" >
                <Card>
                    <CardImg top width="100%" src="https://picsum.photos/318/180" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{this.props.foodItem.name}</CardTitle>
                        <CardText>{this.props.foodIteam.description}</CardText>
                    </CardBody>
                </Card>
             </Col>        
        )
    }
}

export default FoodCard