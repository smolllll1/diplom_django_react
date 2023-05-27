import React, { useContext } from 'react';
import { motion as m } from "framer-motion";
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { ContentData } from '../data/content-data';
import { SearchData } from '../data/search-data';

export const SearchPeopleList = () => {

    const { onHandlerCardsInfoPeople } = useContext(ContentData);
    const { searchPeopleResults, isSearchValue } = useContext(SearchData);

    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-100 px-5"
            style={{ backgroundColor: "#01b4e4" }}>
            <h6 className='text-secondary fw-light mt-3'>
                <b>{searchPeopleResults?.data?.count}</b> people were found for the search query "<b>{isSearchValue}</b>"
            </h6>
            {searchPeopleResults?.data?.results.map((item) => {
                return <Card key={item.id} style={{ backgroundColor: "rgba(13, 37, 63, .9)" }}
                    className='d-flex flex-row w-100 mt-3 mb-3'>
                    <div className='d-flex'>
                        <Link to={`/pop_people/${item.id}`}
                            onClick={() => { onHandlerCardsInfoPeople(item.id) }}>
                            <Card.Img src={`https://www.themoviedb.org/t/p/w90_and_h90_face${item.profile_path}`}
                                style={{ width: "6rem", objectFit: "cover" }}
                                alt="Card image" />
                        </Link>
                    </div>
                    <Card.Body className='d-flex row p-1 m-0'>
                        <Card.Title className='fs-6 fw-bold text-white'>
                            {item.name}
                        </Card.Title>
                        <Card.Text className='fs-6 text-white'>
                            {item.known_for_department}
                        </Card.Text>
                    </Card.Body>
                </Card>
            })
            }
        </m.div>
    )
}
