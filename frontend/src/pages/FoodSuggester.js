import React from 'react';

//CSS for this specific components
import './FoodSuggester.css'; 

//Import for reactstrap premade components/labels
import { Container, Col, Row, Input, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const FoodSuggester = () => {
    return ( 
        <div>
            {/* Navbar component */}
            <div className='navbar'>
                <div className='navbar-brand'>
                    <h1>Hungry</h1>
                </div>
                <div className='navbar-items'>
                    <a href='' className='navbar-item1'>Home</a>
                    <a href='' className='navbar-item2'>Cookbook</a>
                    <a href='/menusdash' className='navbar-item3'>Menus</a>
                </div>
                <div className='navbar-account'>Profile Picture</div>
            </div>
            {/* Main title for component */}
            <h1>Random Food Selecter</h1>
            {/* Food Suggester component which suggests food ideas to the user */}
            <Row className="justify-content-center align-self-center" style={{padding: 50}}>
                {/* This column is used for the filter form */}
                <Col xs="3">
                    <Container>
                        <Container>
                            <Row>
                                <Col sm={{ size: 'auto', offset: 0 }}>
                                    <Input type="checkbox" className='checkbox-1'/> 
                                </Col>
                                <Col sm={{ size: 'auto', offset: 0 }}>
                                    <h4 className='checkbox-1'>Beef</h4>
                                </Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <Col sm={{ size: 'auto', offset: 0 }}>
                                    <Input type="checkbox" className='checkbox-1'/> 
                                </Col>
                                <Col sm={{ size: 'auto', offset: 0 }}>
                                    <h4 className='checkbox-1'>Peanuts</h4>
                                </Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <Col sm={{ size: 'auto', offset: 0 }}>
                                    <Input type="checkbox" className='checkbox-1'/> 
                                </Col>
                                <Col sm={{ size: 'auto', offset: 0 }}>
                                    <h4 className='checkbox-1'>Poultry</h4>
                                </Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <Col sm={{ size: 'auto', offset: 0 }}>
                                    <Input type="checkbox" className='checkbox-1'/> 
                                </Col>
                                <Col sm={{ size: 'auto', offset: 0 }}>
                                    <h4 className='checkbox-1'>Pork</h4>
                                </Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <Col sm={{ size: 'auto', offset: 0 }}>
                                    <Input type="checkbox" className='checkbox-1'/> 
                                </Col>
                                <Col sm={{ size: 'auto', offset: 0 }}>
                                    <h4 className='checkbox-1'>Shellfish</h4>
                                </Col>
                            </Row>
                        </Container>
                    </Container>
                </Col>
                {/* This column is used to display the food item - JACK UPDATE THIS */}
                <Col xs="auto" >
                    <Card>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button style={{marginRight: 50}}>Next</Button>
                            <Button>Add to Cookbook</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default FoodSuggester;