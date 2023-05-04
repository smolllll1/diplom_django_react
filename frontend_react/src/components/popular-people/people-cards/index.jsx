import React, {useContext} from 'react';
import Card from 'react-bootstrap/Card';
import { ContentData } from "../../data/content-data";


const PeopleCards = ({item}) => {

    const { onCardsInfo } = useContext(ContentData);
    
    return (
        <div>
            <Card
                style={{ width: '14rem', cursor: "pointer" }}
                onClick={() => onCardsInfo(item)}>
                <Card.Img variant="top"
                    src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                    alt="Card image" />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.release_date}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default PeopleCards;