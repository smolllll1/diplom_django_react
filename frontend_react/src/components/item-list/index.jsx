import React, { useState, useEffect, useContext } from "react";
import { ourContext } from "../../pages/content";
import Card from 'react-bootstrap/Card';
import CircularStatic from "../progress";

import './item-list.css'

function ItemList({ request }) {

    const [property, setProperty] = useState(null)

    useEffect(() => {
        request.then((data) => {
            setProperty(data.results)
            console.dir(data.results)
        })
    }, [request])

    const { onElementInfo } = useContext(ourContext);

    return (
        <div className="wrapper">
            <div className="wrapper-cards">
                {property === null ?
                    <CircularStatic />
                    :
                    property.map((item) => {
                        return <Card key={item.id}
                            style={{ width: '14rem' }}
                            onClick={() => onElementInfo(item)}>
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
        </div>
    )
}

export default ItemList;

/**src={`https://image.tmdb.org/t/p/original/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg`} */