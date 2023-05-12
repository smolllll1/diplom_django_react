import React, { useState, Fragment } from "react";
import CircularStatic from "../progress";
import ButtonFilterPeople from "./button-filter-people";
import PeopleCards from "./people-cards";
import { ContentData } from "../data/content-data";
import { useContext } from "react";

const PopularPeople = () => {

    //array objects data people 
    const { dataPeople } = useContext(ContentData);
    // gender filter people
    const [filteredPeople, setFilteredPeople] = useState([]);
    // 0 - all people cards 
    const [genderPeople, setGenderPeople] = useState(0);

    return (
        <Fragment>
            <div className="d-flex col justify-content-around mt-3">
                <h3 className="m-0 align-self-center text-secondary">Popular People</h3>
                <ButtonFilterPeople
                    dataPeople={dataPeople}
                    setFilteredPeople={setFilteredPeople}
                    genderPeople={genderPeople}
                    setGenderPeople={setGenderPeople} />
            </div>
            {dataPeople === null ?
                <CircularStatic />
                :
                <div className="d-flex gap-2 py-4 justify-content-center"
                    style={{ flexWrap: "wrap" }}>
                    {filteredPeople === null ?
                        null
                        :
                        filteredPeople?.map((item, i) => {
                            return <PeopleCards
                                key={item.id * i + "d"}
                                item={item}
                            />
                        })
                    }
                </div>
            }
        </Fragment >
    )
}

export default PopularPeople;