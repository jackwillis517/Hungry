import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, Col, CardText, Button, CardSubtitle } from 'reactstrap';
import "./FoodCard.css";

class FoodCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (   
            <div>
            <Col xs="3">
                <Card body inverse style={{backgroundColor : '#fc5130'}}>
                    <CardBody body inverse style={{backgroundColor : '#fc5130'}}>
                        {/* {this.props.foodItem.name} */}
                        <CardTitle className='foodTitle'>Food Item Title</CardTitle>
                    </CardBody>
                    <CardImg width="100%" src="https://picsum.photos/318/180" alt="Card image cap" />
                    <CardBody body inverse style={{backgroundColor : '#fc5130'}}>
                        {/* {this.props.foodItem.description} */}
                        <CardText className='foodText'>Description of the super awesome food item that is just here to show scale.</CardText>
                        <Button className='foodButton-1'>Edit/Remove</Button>
                        <br/>
                        <Button className='foodButton-2'>Todo dropdown menu</Button>
                    </CardBody>
                </Card>
             </Col>
             </div>        
        )
    }
}

export default FoodCard