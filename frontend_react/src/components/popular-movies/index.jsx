import React, { useState, useEffect } from "react";
import CircularStatic from "../progress";
import { motion as m } from 'framer-motion';
import ButtonFilterMovies from "./button-filter-movies";
import MoviesCards from "./movies-cards";
import { GetRequest } from "../../api/get-request";

const PopularMovies = () => {

    const [propertyMoviesPopular, setPropertyMoviesPopular] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    // 0 - all genres 
    const [activeGenre, setActiveGenre] = useState(0);

    useEffect(() => {
        new GetRequest().getDataMoviesPopular().then((data) => {
            setPropertyMoviesPopular(data.results);
        });
        new GetRequest().getDataMoviesPopular().then((data) => {
            setFilteredMovies(data.results);
        });
    }, []);

    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="d-flex flex-column"
            style={{ backgroundColor: "floralwhite" }}
        >
            <ButtonFilterMovies
                propertyMoviesPopular={propertyMoviesPopular}
                setFilteredMovies={setFilteredMovies}
                activeGenre={activeGenre}
                setActiveGenre={setActiveGenre}
            />
            <m.div
                layout
                className="w-100 d-flex gap-2 py-4 justify-content-center"
                style={{ flexWrap: "wrap" }}
            >
                {filteredMovies === null ?
                    <CircularStatic />
                    :
                    filteredMovies.map((item) => {
                        return <MoviesCards key={item.id} item={item} />
                    })
                }
            </m.div>
        </m.div >
    )
}

export default PopularMovies;