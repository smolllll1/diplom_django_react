import React, { useContext } from "react";
import { motion as m } from 'framer-motion';
import CircularStatic from "../progress";
import { ContentData } from "../data/content-data";
import { useParams } from "react-router-dom";
import ScrollInfoMovies from "./scroll-info-movies";

const PeopleListInfo = () => {

    // url person id
    const { personId } = useParams();
    // click cards people
    const { dataPeople } = useContext(ContentData)
    // simple (not property biography)
    const biography = [
        {
            id: 1,
            paragraphFirst: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Qui iusto nisi, odit reprehenderit, necessitatibus
            adipisci earum distinctio inventore dolore ullam quis
            delectus, voluptatibus minima repellat sequi. Sit ullam reiciendis iusto.`,
            paragraphSecond: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Qui iusto nisi, odit reprehenderit, necessitatibus
            adipisci earum distinctio inventore dolore ullam quis
            delectus, voluptatibus minima repellat sequi. Sit ullam reiciendis iusto.`,
        }
    ];

    if (personId) {
        return (
            <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="d-flex w-100 justify-content-center px-3"
                style={{ backgroundColor: 'rgb(1, 180, 228)' }}
            >
                {personId === null ?
                    <CircularStatic />
                    :
                    <div className="card my-3"
                        style={{
                            width: "100%",
                            backgroundColor: '#ffffff',
                            borderStyle: "none",
                            boxShadow: "4px 5px 5px -4px rgba(13, 37, 63)",
                        }}>
                        <div className="row g-0">
                            <div className="col-md-4 d-flex vh-100 justify-content-center align-items-center">
                                <div className="w-75 h-75 d-flex">
                                    {dataPeople?.results.filter((item) => {
                                        return item.id.toString() === personId;
                                    })
                                        .map((item, i) => {
                                            return <img key={item.id * i + "s"}
                                                src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                                                className="rounded"
                                                style={{ width: "100%", objectFit: "cover" }}
                                                alt={item.name} />
                                        })}
                                </div>
                            </div>
                            <div className="col-md-8 d-flex text-body">
                                <div className="card-body d-flex row">
                                    {dataPeople?.results.filter((item) => {
                                        return item.id === parseInt(personId);
                                    })
                                        .map((item, i) => {
                                            return <h2 key={item.id * i + "g"}
                                                className="card-title fw-bold">
                                                {item.name}
                                            </h2>
                                        })
                                    }
                                    <h5 className="card-title">
                                        Biography
                                    </h5>
                                    {biography.map((item) => {
                                        return <div key={item.id}>
                                            <p>{item.paragraphFirst}</p>
                                            <p>{item.paragraphSecond}</p>
                                        </div>
                                    })
                                    }
                                    <h3 className="card-title m-0">
                                        Known For
                                    </h3>
                                    <div className="d-flex w-100">
                                        {dataPeople?.results.filter((item) => {
                                            return item.id === parseInt(personId)
                                        })
                                            .map((item, i) => {
                                                return <ScrollInfoMovies
                                                    key={item.id * i + "f"}
                                                    item={item}
                                                />
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </m.div >
        )
    }
};

export { PeopleListInfo };