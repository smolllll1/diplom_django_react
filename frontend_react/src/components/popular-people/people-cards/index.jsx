import React from 'react';
import Card from 'react-bootstrap/Card';
import { motion as m } from 'framer-motion';
import { Link } from 'react-router-dom';

const PeopleCards = ({ item }) => {

    return (
        <m.div layout>
            <Card
                style={{
                    width: '14rem',
                    boxShadow: "4px 5px 5px -4px rgba(13, 37, 63)",
                }}>
                <Link
                    id={item.id}
                    to={`/pop_people/${item.id}`}
                    title={item.name}
                    alt={item.name}>
                    <Card.Img variant="top"
                        style={{ cursor: "pointer" }}
                        src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                        alt={item.name} />
                </Link>
                <Card.Body>
                    <Card.Title
                        style={{
                            fontSize: "1rem",
                            fontWeight: "bold"
                        }}
                    >{item.name}</Card.Title>
                    <Card.Text>{item.release_date}</Card.Text>
                </Card.Body>
            </Card>
        </m.div>
    );
}

export default PeopleCards;