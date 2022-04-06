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
                <div className='foodsuggester-card'>
                    <img src="https://picsum.photos/318/180" alt="Card image cap"></img>
                    <div className='foodsuggester-card-body'>
                        <h1>{this.props.item.name}</h1>
                        <h2>{this.props.item.description}</h2>
                    </div>
                </div>
             </div>        
        )
    }
}

export default FoodCard;