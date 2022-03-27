import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';
import MenuCard from './MenuCard';

class MenusDashboard extends Component {
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
        let menuCards = this.state.menuItem.map(menuItem => {
            return (
                <Col xs="auto" md="6" lg="4">
                    <MenuCard menuItem={menuItem} />
                </Col>
            )
        })
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
            <Row className="py-5" noGutters style={{
                backgroundColor: '#003366'
            }}>
                <Col xs="2">
                    <div>
                        <Button
                            color="light"
                        >
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
                        <Button
                            href="/newMenu"
                            color="light"
                        >
                            Create
                        </Button>
                    </div>
                </Col>
            </Row>
            </div>
        )
    }
}

export default MenusDashboard