import React, { Component } from 'react';

//Import for reactstrap premade components/labels
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

//Specific css for this component
import './ModifyFoodIdea.css'; 

class NewMenu extends Component {
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
                {/* New Menu form used to create a new menu (food playlist) */}
                <Form className='login-form'>
                    <h2 className='login-subtitle'>Create New Menu</h2>
                    <FormGroup className='login-text'>
                    <Label>Menu Title</Label>
                    <Input //TODO - backend hookup
                        type='email' 
                        placeholder='Super Cool Menu Title'
                    />
                    </FormGroup>
                    <FormGroup className='login-text'>
                    <Label>Description of Menu</Label>
                    <Input //TODO - backend hookup
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

export default NewMenu;