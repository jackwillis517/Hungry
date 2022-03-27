import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'; 
import './ModifyFoodIdea.css'; 

class NewMenu extends Component {
    render() {
        return (
            <div>
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
                <Form className='login-form'>
                    
                    <h2 className='login-subtitle'>Create New Menu</h2>

                    <FormGroup className='login-text'>
                    <Label>Menu Title</Label>
                    <Input
                        type='email' 
                        placeholder='Super Cool Menu Title'
                    />
                    </FormGroup>
                    <FormGroup className='login-text'>
                    <Label>Description of Menu</Label>
                    <Input
                        type='email' 
                        placeholder='Description' 
                    />
                    </FormGroup>
                    <Button className='login-button'>Create Menu</Button>
                </Form>
            </div>
        )
    }
}

export default NewMenu