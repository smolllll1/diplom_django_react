import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { motion as m } from 'framer-motion';
import { ContentData } from "../../data/content-data";

const MoviesCards = ({ item }) => {

    const { onCardsInfo } = useContext(ContentData);

    return (
        <m.div layout>
            <Card
                style={{ width: '14rem', cursor:"pointer" }}
                onClick={() => onCardsInfo(item)}>
                <Card.Img variant="top"
                    style={{ height: "16rem", objectFit: "cover" }}
                    src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                    alt="Card image" />
                <Card.Body
                    style={{ height: "7rem" }}
                >
                    <Card.Title style={{ fontSize: "1rem" }}>{item.title}</Card.Title>
                    <Card.Text style={{ fontSize: "1rem" }}>{item.release_date}</Card.Text>
                </Card.Body>
            </Card>
        </m.div>
    );
}

export default MoviesCards;