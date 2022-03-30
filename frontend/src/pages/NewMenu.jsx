import React, { Component } from 'react';

//Import for reactstrap premade components/labels
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

//Specific css for this component
import '../stylesheets/ModifyFoodIdea.css'; 

class NewMenu extends Component {
    render() {
        return (
            <div>
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