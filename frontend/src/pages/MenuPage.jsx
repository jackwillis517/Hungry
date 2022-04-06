import React, { Component } from 'react';

//Import for reactstrap premade components/labels
import { Button, Row, Col } from 'reactstrap';

//Import premade Menu Card component from MenuCard.js
import MenuCard from './MenuCard';

class MenuPage extends Component {
    //Constructor to acccess data from the database, orignally is a static javascript object for testing
    //sets the state of this react component
    constructor() {
        super();
        this.state = {
            menuItem: [
                {
                    name: "Menu1 Snacks",
                    mealType: "Hangry",
                    description: "salty and sweet",
                },
                {
                    name: "Menu2 Dinner",
                    mealType: "dinner",
                    description: "Filling meals"
                },
                {
                    name: "Menu3 Breakfast",
                    mealType: "Just hash browns",
                    description: "too many potatoes"
                },
                {
                    name: "Menu1 Snacks",
                    mealType: "Hangry",
                    description: "salty and sweet"
                },
                {
                    name: "Menu2 Dinner",
                    mealType: "dinner",
                    description: "Filling meals"
                },
                {
                    name: "Menu3 Breakfast",
                    mealType: "Just hash browns",
                    description: "too many potatoes"
                }
            ]
        }
    }
    render() {
        //Function used to create menuItems for all the menus a user has
        let menuCards = this.state.menuItem.map(menuItem => {
            return (
                <Col xs="auto" md="6" lg="4">
                    <MenuCard menuItem={menuItem} />
                </Col>
            )
        })
        return (
            <div>
                <h2 class="text-center" style={{
                    color: 'white',
                    // borderColor: 'white'
                }}>MenuTitle</h2>
                {/* Menus Dashboard component used to show a user their menus they've created */}
                <Row className="py-5" noGutters>
                    <Col xs="2">
                        <div>
                            <Button color="light">
                                Filter
                            </Button>
                        </div>
                    </Col>
                    <Col xs="8" sm="8">
                        <div class="row g-4 justify-content-center">
                            {menuCards}
                        </div>
                    </Col>
                    <Col xs="2">
                        <div>
                            <Button href="/newMenu" color="light">
                                Create
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default MenuPage;