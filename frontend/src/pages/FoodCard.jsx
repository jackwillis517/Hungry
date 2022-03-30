import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, Col, CardText, Button, CardSubtitle } from 'reactstrap';
import "../stylesheets/FoodCard.css";

class FoodCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (   
            <div>
            <Col xs="3">
                <Card body inverse style={{backgroundColor : '#fff'}}>
                    <CardBody body inverse style={{backgroundColor : '#fff'}}>
                        {/* {this.props.foodItem.name} */}
                        <CardTitle className='foodTitle'>Food Item Title</CardTitle>
                    </CardBody>
                    <CardImg width="100%" src="https://picsum.photos/318/180" alt="Card image cap" />
                    <CardBody body inverse style={{backgroundColor : '#fff'}}>
                        {/* {this.props.foodItem.description} */}
                        <CardText className='foodText'>Description of the super awesome food item that is just here to show scale.</CardText>
                        <CardText className='foodText'>Description of the super awesome food item that is just here to show scale.</CardText>
                    </CardBody>
                </Card>
             </Col>
             </div>        
        )
    }
}

export default FoodCard