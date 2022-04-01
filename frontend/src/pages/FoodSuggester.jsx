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
        <div className='flex-container2'>
            {/* Food Suggester component which suggests food ideas to the user */}
            
                {/* This column is used for the filter form */}
                <div className='checkboxes'>
                    <form>
                        <fieldset className ='checkbox-inputs'>
                            <input type='checkbox' id='beef'></input>
                            <label for="beef">Beef</label><br/>
                            <input type='checkbox' id='peanuts'></input>
                            <label for="peanuts">Peanuts</label><br/>
                            <input type='checkbox' id='poultry'></input>
                            <label for="poultry">Poultry</label><br/>
                            <input type='checkbox' id='pork'></input>
                            <label for="pork">Pork</label><br/>
                            <input type='checkbox' id='shellfish'></input>
                            <label for="shellfish">Shellfish</label>
                        </fieldset>
                    </form>
                </div>
                {/* This column is used to display the food item*/}

                <div className='foodsuggester-card'>
                    <img src={cloudinary_url} alt="Card image cap"></img>
                    <div className='foodsuggester-card-body'>
                        <h1>{title}</h1>
                        <h2>{links}</h2>
                        <h2>{description}</h2>
                        <Button style={{marginRight: 50}}>Next</Button>
                        <Button onClick= {addToCookbook}>Add to Cookbook</Button>
                    </div>
                </div>
        </div>
    )
}
export default FoodSuggester;

{/* <Container>
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
                    </Container> */}