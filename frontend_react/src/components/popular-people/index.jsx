import React, { useState, useEffect, useContext } from "react";
import Card from 'react-bootstrap/Card';
import CircularStatic from "../progress";
import { motion as m } from 'framer-motion';
import { ContentData } from "../data/content-data";
import ButtonFilterPeople from "./button-filter-people";
import { GetRequest } from "../../api/get-request";

const PopularPeople = () => {

    const { onCardsInfo } = useContext(ContentData);
    const [propertyPeoplePopular, setPropertyPeoplePopular] = useState([]);
    const [filteredPeople, setFilteredPeople] = useState([]);
    // 0 - all people 
    const [genderPeople, setGenderPeople] = useState(0);

    useEffect(() => {
        new GetRequest().getDataPeoplePopular().then((data) => {
            setPropertyPeoplePopular(data.results);
        });
        new GetRequest().getDataPeoplePopular().then((data) => {
            setFilteredPeople(data.results);
        })
    }, []);

    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="d-flex flex-column"
            style={{ backgroundColor: "floralwhite" }}
        >
            <ButtonFilterPeople
                propertyPeoplePopular={propertyPeoplePopular}
                setFilteredPeople={setFilteredPeople}
                genderPeople={genderPeople}
                setGenderPeople={setGenderPeople}
            />
            <div className="d-flex gap-2 py-4 justify-content-center"
                style={{ flexWrap: "wrap" }}
            >
                {filteredPeople === null ?
                    <CircularStatic />
                    :
                    filteredPeople.map((item) => {
                        return <Card key={item.id}
                            style={{ width: '14rem', cursor:"pointer" }}
                            onClick={() => onCardsInfo(item)}>
                            <Card.Img variant="top"
                                src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                                alt="Card image" />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>{item.release_date}</Card.Text>
                            </Card.Body>
                        </Card>
                    })
                }
            </div>
        </m.div >
    )
}

export default PopularPeople;