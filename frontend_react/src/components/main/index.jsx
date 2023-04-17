import React from "react";
import Card from 'react-bootstrap/Card';
import FormRegiatration from './form-registration'

import './main.css';

function Main() {
    return (
        <main className="wrapper">
            <Card className="bg-dark text-white">
                <Card.Img src="holder.js/100px270" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Welcome</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis et
                        vel harum itaque consequatur quibusdam minus atque, assumenda, deleniti
                        earum culpa? Soluta nostrum pariatur harum esse provident placeat ipsum dolores?
                    </Card.Text>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <FormRegiatration />
        </main>
    );
}

export default Main;
