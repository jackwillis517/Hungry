import React, { Component } from 'react';

//Import for reactstrap premade components/labels
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';

class MenuCard extends Component {
    //Constructor to acccess data from the database
    constructor(props) {
        super(props);
    }
    render() {
        return (
            // Menu Card component used in the Menus Dashboard component for displaying a specific users menu
            <Card body inverse className="border-3 border-white text-center" style={{
                backgroundColor: '#5e5e5e',
                // borderColor: 'white'
            }}>
                <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/318/180"
                    top
                    width="100%"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        {this.props.menuItem.name}
                    </CardTitle>
                    {/* Based on the layout each card only displays a Title, but in case we wanted to add other stuff later, the code below adds subtitles and text */}
                    {/* <CardSubtitle
                        className="mb-2"
                        tag="h6"
                    >
                        {this.props.menuItem.mealType}
                    </CardSubtitle>
                    <CardText>
                        {this.props.menuItem.description}
                    </CardText> */}
                    <Button>
                        More Info
                    </Button>
                </CardBody>
            </Card>
        )
    }
}

export default MenuCard;