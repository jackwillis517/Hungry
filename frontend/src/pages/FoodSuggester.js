import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './FoodSuggester.css'; 
import { Container, Col, Row, Input, Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';

const FoodSuggester = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [links, setLinks] = useState('')
    const [cloudinary_url, setCloudinary_URL] = useState('')

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max)
    }
        
    useEffect(() => {
        axios.get('http://localhost:5000/api/foodIdea')
            .then((res) => {
                const randNum = getRandomInt(res.data.length)
                setTitle(res.data[randNum].title)
                setDescription(res.data[randNum].description)
                setLinks(res.data[randNum].links)
                setCloudinary_URL(res.data[randNum].cloudinary_url)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    return ( 
        <div>
        <div className='navbar'>
          <div className='navbar-brand'>
            <h1>Hungry</h1>
          </div>
          <div className='navbar-items'>
            <a href='' className='navbar-item1'>Placeholder</a>
            <a href='/login' className='navbar-item2'>Login</a>
            <a href='/createuser' className='navbar-item3'>Create Account</a>
          </div>
          <div className='navbar-account'>Profile Picture</div>
        </div>
         <h1>Random Food Selecter</h1>
         <Row className="justify-content-center align-self-center" style={{padding: 50}}>
             <Col xs="3">
                <Container>
                    <Container>
                        <Row>
                            <Col sm={{ size: 'auto', offset: 0 }}>
                                <Input type="checkbox" className='checkbox-1'/> 
                            </Col>
                            <Col sm={{ size: 'auto', offset: 0 }}>
                                <h4 className='checkbox-1'>Title</h4>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col sm={{ size: 'auto', offset: 0 }}>
                                <Input type="checkbox" className='checkbox-1'/> 
                            </Col>
                            <Col sm={{ size: 'auto', offset: 0 }}>
                                <h4 className='checkbox-1'>Title</h4>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col sm={{ size: 'auto', offset: 0 }}>
                                <Input type="checkbox" className='checkbox-1'/> 
                            </Col>
                            <Col sm={{ size: 'auto', offset: 0 }}>
                                <h4 className='checkbox-1'>Title</h4>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col sm={{ size: 'auto', offset: 0 }}>
                                <Input type="checkbox" className='checkbox-1'/> 
                            </Col>
                            <Col sm={{ size: 'auto', offset: 0 }}>
                                <h4 className='checkbox-1'>Title</h4>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col sm={{ size: 'auto', offset: 0 }}>
                                <Input type="checkbox" className='checkbox-1'/> 
                            </Col>
                            <Col sm={{ size: 'auto', offset: 0 }}>
                                <h4 className='checkbox-1'>Title</h4>
                            </Col>
                        </Row>
                    </Container>
                </Container>
             </Col>
             <Col xs="auto" >
                <Card>
                    <CardImg top width="100%" src={cloudinary_url} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{title}</CardTitle>
                        <CardText>{description}</CardText>
                        <CardText>{links}</CardText>
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
   