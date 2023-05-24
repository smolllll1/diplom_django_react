import React from 'react'
import Card from 'react-bootstrap/Card';

const SearchListPeople = () => {

    return (
        <div>
        <Card className='d-flex flex-row w-100' style={{ height:"5rem" }}>
            <div className='d-flex'>
                <Card.Img src="https://www.themoviedb.org/t/p/w90_and_h90_face/3AzHImm0oz2xV5mekONhl2zYXVU.jpg"
                    style={{ width: "100%", objectFit: "cover" }}
                    alt="Card image" />
            </div>
            <Card.Body className='d-flex row m-0'>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    )
}

export { SearchListPeople };