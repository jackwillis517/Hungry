import React, { Component } from 'react';

//Import for reactstrap premade components/labels
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

//Specific css for this component
import './ModifyFoodIdea.css'; 

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
                {/* Navbar component */}
                <div className='navbar'>
                    <div className='navbar-brand'>
                        <h1>Hungry</h1>
                    </div>
                    <div className='navbar-items'>
                        <a href='' className='navbar-item1'>Home</a>
                        <a href='/foodSuggester' className='navbar-item2'>Idea Generator</a>
                        <a href='' className='navbar-item3'>Cookbook</a>
                    </div>
                    <div className='navbar-account'>Profile Picture</div>
                </div>
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