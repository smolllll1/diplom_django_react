import React from 'react'
import Card from 'react-bootstrap/Card';

const SearchListMovies = () => {
  return (
    <Card className='d-flex flex-row w-100' style={{ height: "9rem" }}>
      <div className='d-flex'>
        <Card.Img src="https://www.themoviedb.org/t/p/w94_and_h141_bestv2/irIS5Tn3TXjNi1R9BpWvGAN4CZ1.jpg"
          style={{ width: "100%", objectFit: "cover" }}
          alt="Card image" />
      </div>
      <Card.Body className='d-flex row p-1 m-0'>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export { SearchListMovies };