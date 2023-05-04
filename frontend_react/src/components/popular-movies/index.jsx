import React, { useState, useEffect } from "react";
import CircularStatic from "../progress";
import { motion as m } from 'framer-motion';
import ButtonFilterMovies from "./button-filter-movies";
import { getMoviesPage } from '../../api/axios';
import MoviesCards from "./movies-cards";
import PaginationMovies from "./pagination-movies";
import { useQuery } from "react-query";

const PopularMovies = () => {

    const [propertyMoviesPopular, setPropertyMoviesPopular] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    // 0 - all genres 
    const [activeGenre, setActiveGenre] = useState(0);
    // pagination movies
    const [pageMovies, setPageMovies] = useState(1);

    useEffect(() => {
        getMoviesPage(pageMovies).then((data) => {
            setPropertyMoviesPopular(data.results)
        });
    }, [pageMovies]);

    const {
        isLoading,
        isError,
        error,
        data: cardsMovies,
        isFetching,
        isPreviousData,
    } = useQuery(["pop_people/", pageMovies], () => getMoviesPage(pageMovies), {
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
                <h3 className="m-0 align-self-center">Popular Movies</h3>
                <ButtonFilterMovies
                    propertyMoviesPopular={propertyMoviesPopular}
                    setFilteredMovies={setFilteredMovies}
                    activeGenre={activeGenre}
                    setActiveGenre={setActiveGenre}
                />
            </div>
            {propertyMoviesPopular === null ?
                <CircularStatic />
                :
                <div
                    className="w-100 d-flex gap-2 py-4 justify-content-center"
                    style={{ flexWrap: "wrap" }}
                >
                    {filteredMovies === null ?
                        null
                        :
                        filteredMovies.map((item) => {
                            return <MoviesCards key={item.id} item={item} />
                        })
                    }
                </div>
            }
            <PaginationMovies
                pageMovies={pageMovies}
                setPageMovies={setPageMovies}
                cardsMovies={cardsMovies}
                isLoading={isLoading}
                isError={isError}
                error={error}
            />
        </m.div >
    )
}

export default PopularMovies;