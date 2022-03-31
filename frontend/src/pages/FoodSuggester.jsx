import React, {useState, useEffect} from 'react'
import axios from 'axios';

//CSS for this specific components
import '../stylesheets/FoodSuggester.css'; 

//Import for reactstrap premade components/labels
import { Container, Col, Row, Input, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const FoodSuggester = () => {
    const [foodIdeaID, setFoodIdeaID] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [links, setLinks] = useState('')
    const [cloudinary_url, setCloudinary_URL] = useState('')

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max)
    }
    
    //Loads the random food idea when the pages is loaded
    useEffect(() => {
        axios.get('http://localhost:5000/api/foodIdea')
            .then((res) => {
                const randNum = getRandomInt(res.data.length)
                setFoodIdeaID(res.data[randNum]._id)
                setTitle(res.data[randNum].title)
                setDescription(res.data[randNum].description)
                setLinks(res.data[randNum].links)
                setCloudinary_URL(res.data[randNum].cloudinary_url)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    //Adds the currently displayed food idea to the foodidea array
    //in the user's document in mongoDB
    const addToCookbook = () => {
       
        const accountID = JSON.parse(localStorage.getItem('user'))
        console.log(accountID._id)
        console.log(foodIdeaID)
        axios.put(`http://localhost:5000/api/users/account/${foodIdeaID}/${accountID._id}`)
        .then((res) => {
            console.log(`The food idea: ${foodIdeaID}, was added to the user: 
            ${accountID._id} account`)
        })
        .catch((error) => {
            console.error(error)
        })
    }

    return ( 
        <div className='container'>
            {/* Food Suggester component which suggests food ideas to the user */}
            <Row>
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
                        <CardImg top width="100%" src={cloudinary_url} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>{title}</CardTitle>
                            <CardSubtitle>{links}</CardSubtitle>
                            <CardText>{description}</CardText>
                            <Button style={{marginRight: 50}}>Next</Button>
                            <Button onClick= {addToCookbook}>Add to Cookbook</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default FoodSuggester;
