import React, { useState, Fragment } from "react";
import CircularStatic from "../progress";
import ButtonFilterMovies from "./button-filter-movies";
import MoviesCards from "./movies-cards";
import { ContentData } from "../data/content-data";
import { useContext } from "react";

const PopularMovies = () => {

    //array objects data movies 
    const { dataMovies } = useContext(ContentData);
    // genre filter movies
    const [filteredMovies, setFilteredMovies] = useState([]);
    // 0 - all genres 
    const [activeGenre, setActiveGenre] = useState(0);

    return (
        <Fragment>
            <div className="d-flex col justify-content-around mt-3">
                <h3 className="m-0 align-self-center text-secondary">Popular Movies</h3>
                <ButtonFilterMovies
                    dataMovies={dataMovies}
                    setFilteredMovies={setFilteredMovies}
                    activeGenre={activeGenre}
                    setActiveGenre={setActiveGenre} />
            </div>
            {dataMovies === null ?
                <CircularStatic />
                :
                <div className="w-100 d-flex gap-2 py-4 justify-content-center"
                    style={{ flexWrap: "wrap" }}>
                    {filteredMovies === null ?
                        null
                        :
                        filteredMovies?.map((item, i) => {
                            return <MoviesCards 
                            key={item.id*i+"r"} 
                            item={item} 
                            />
                        })
                    }
                </div>
            }
        </Fragment >
    )
}

export default PopularMovies;