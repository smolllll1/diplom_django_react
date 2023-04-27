import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import CircularStatic from "../progress";
import { motion as m } from 'framer-motion';

import './item-list.css'

function ItemList({ request, onCardsInfo }) {

    const [property, setProperty] = useState(null)

    useEffect(() => {
        request.then((data) => {
            setProperty(data.results)
            // console.dir(data.results)
        })
    }, [request]);

    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="wrapper">
            <div className="wrapper-cards">
                {property === null ?
                    <CircularStatic />
                    :
                    property.map((item) => {
                        return <Card key={item.id}
                            style={{ width: '14rem' }}
                            onClick={() => onCardsInfo(item)}>
                            {item.backdrop_path ?
                                <Card.Img variant="top" className="img-moveis"
                                    src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                                    alt="Card image" />
                                : item.profile_path ?
                                    <Card.Img variant="top"
                                        src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                                        alt="Card image" />
                                    : null
                            }
                            <Card.Body>
                                <Card.Title>{item.title} {item.name}</Card.Title>
                                <Card.Text>{item.release_date}</Card.Text>
                            </Card.Body>
                        </Card>
                    })
                }
            </div>
        </m.div>
    )
}

export default ItemList;