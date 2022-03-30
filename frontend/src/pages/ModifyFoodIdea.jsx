import React, { Component } from 'react';

//Import for reactstrap premade components/labels
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

//Specific css for this component
import '../stylesheets/ModifyFoodIdea.css'; 

class ModifyFoodIdea extends Component {
    //Constructor for acccess data from the database, orignally is a static javascript object for testing
    constructor() {
        super();
        this.state = {
            foodItem: [
                {
                    name: "Burrito",
                    filterType: "Beef",
                    description: "Heaven wrapped in a tortilla",
                }
            ]
        }
    }
    render() {
        return (
            <div>
                {/* Modify Food Idea form used for a user to update an existing food idea */}
                <Form className='login-form'>
                    <h2 className='login-subtitle'>Modify Food Idea</h2>
                    <FormGroup className='login-text'>
                    <Label>Name</Label>
                    <Input //TODO - connect with backend
                        type='email' 
                        placeholder={this.state.foodItem[0]["name"]} 
                    />
                    </FormGroup>
                    <FormGroup className='login-text'>
                    <Label>Description</Label>
                    <Input //TODO - connect with backend
                        type='email' 
                        placeholder={this.state.foodItem[0]["description"]} 
                    />
                    </FormGroup>
                    <FormGroup className='login-text'>
                    <Label>Type</Label>
                    <Input //TODO - connect with backend
                        type='email' 
                        placeholder={this.state.foodItem[0]["filterType"]} 
                    />
                    </FormGroup>
                    <Button className='login-button'>Update Item</Button>
                </Form>
            </div>
        )
    }
}

export default ModifyFoodIdea;