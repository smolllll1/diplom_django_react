import React, { useState, useEffect } from "react";
import CircularStatic from "../progress";
import { motion as m } from 'framer-motion';
import ButtonFilterPeople from "./button-filter-people";
import { getPeoplePage } from '../../api/axios';
import PeopleCards from "./people-cards";
import PaginationPeople from "./pagination-people";
import { useQuery } from "react-query";

const PopularPeople = () => {

    const [propertyPeoplePopular, setPropertyPeoplePopular] = useState([]);
    const [filteredPeople, setFilteredPeople] = useState([]);
    // 0 - all people 
    const [genderPeople, setGenderPeople] = useState(0);
    // pagination people
    const [pagePeople, setPagePeople] = useState(1);

    useEffect(() => {
        getPeoplePage(pagePeople).then((data) => {
            setPropertyPeoplePopular(data.results)
        });
    }, [pagePeople]);

    const {
        isLoading,
        isError,
        error,
        data: cardsPeople,
        isFetching,
        isPreviousData,
    } = useQuery(["pop_people/", pagePeople], () => getPeoplePage(pagePeople), {
        keepPreviousData: true
    });

    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="d-flex flex-column"
            style={{ backgroundColor: "floralwhite" }}
        >
            <div className="d-flex col justify-content-around mt-3">
                <h3 className="m-0 align-self-center">Popular People</h3>
                <ButtonFilterPeople
                    propertyPeoplePopular={propertyPeoplePopular}
                    setFilteredPeople={setFilteredPeople}
                    genderPeople={genderPeople}
                    setGenderPeople={setGenderPeople}
                />
            </div>
            <div className="d-flex gap-2 py-4 justify-content-center"
                style={{ flexWrap: "wrap" }}
            >
                {filteredPeople === null ?
                    <CircularStatic />
                    :
                    filteredPeople.map((item) => {
                        return <PeopleCards key={item.id} item={item} />
                    })
                }
            </div>
            <PaginationPeople
                pagePeople={pagePeople}
                setPagePeople={setPagePeople}
                cardsPeople={cardsPeople}
                isLoading={isLoading}
                isError={isError}
                error={error}
            />
        </m.div >
    )
}

export default PopularPeople;