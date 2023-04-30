import React, { useContext, useEffect, useState } from "react";
import { motion as m } from 'framer-motion';
import { ourContext } from "../../pages/content";
import CircularStatic from "../progress";

const ItemListInfo = () => {

    const [information, setInformation] = useState(null);
    const { popularInformation } = useContext(ourContext);

    useEffect(() => {
        setInformation(popularInformation);
    }, [popularInformation]);

    if (information) {
        return (
            <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="d-flex w-100 justify-content-center px-3"
                style={{ backgroundColor: 'floralwhite' }}
            >
                {information === null ?
                    <CircularStatic />
                    :
                    <div className="card my-3" style={{ width: "100%" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                {information.profile_path ?
                                    <img
                                        src={`https://image.tmdb.org/t/p/original${information.profile_path}`}
                                        className="rounded"
                                        style={{width:"80%", height: "80vh", objectFit: "cover" }}
                                        alt={information.name} />
                                    : information.backdrop_path ?
                                        <img
                                            src={`https://image.tmdb.org/t/p/original${information.backdrop_path}`}
                                            className="rounded"
                                            style={{width:"80%", height: "80vh", objectFit: "cover" }}
                                            alt={information.title} />
                                        :
                                        null
                                }
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {information.title}
                                        {information.name}
                                    </h5>
                                    <span className="card-text">
                                        {information.release_date}
                                    </span>
                                    <p className="card-text">
                                        {information.overview}
                                    </p>
                                    {information.profile_path ?
                                        <ul>
                                            {information.known_for.map((item, i) => {
                                                return <li key={i * 5 + "b"}>
                                                    {item.title}
                                                    {item.name}
                                                    <span className="mx-2">
                                                        {item.release_date}
                                                    </span>
                                                </li>
                                            })

                                            }</ul>
                                        :
                                        null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </m.div >
        )
    }
};

export default ItemListInfo;