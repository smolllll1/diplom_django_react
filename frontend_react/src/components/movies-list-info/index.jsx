import React, { useContext } from "react";
import { motion as m } from 'framer-motion';
import CircularStatic from "../progress";
import { ContentData } from "../data/content-data";
import { useParams } from "react-router-dom";

const MoviesListInfo = () => {

    // url movies id
    const { moviesId } = useParams();
    // click cards movies
    const { dataMovies } = useContext(ContentData)

    if (moviesId) {
        return (
            <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="d-flex w-100 justify-content-center px-3">
                {moviesId === null ?
                    <CircularStatic />
                    :
                    <div className="card my-3 position-relative w-100"
                        style={{ backgroundColor: 'rgba(13, 37, 63, 1)' }}>
                        {dataMovies?.results.filter((item) => {
                            return item.id === parseInt(moviesId)
                        })
                            .map((item, i) => {
                                return <img key={item.id * i + "q"}
                                    src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                                    className="rounded position-absolute opacity-50"
                                    style={{ width: "100%", height: "100vh", objectFit: "cover" }}
                                    alt={item.title} />
                            })
                        }
                        <div className="row g-0">
                            <div className="col-md-4 d-flex vh-100 justify-content-center align-items-center">
                                <div className="w-75 h-75 d-flex">
                                    {dataMovies?.results.filter((item) => {
                                        return item.id === parseInt(moviesId)
                                    })
                                        .map((item, i) => {
                                            return <img key={item.id * i + "w"}
                                                src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                                                className="rounded"
                                                style={{ width: "100%", objectFit: "cover", zIndex: "1000" }}
                                                alt={item.title} />
                                        })
                                    }
                                </div>
                            </div>
                            <div className="col-md-8 d-flex vh-100 justify-content-center align-items-center">
                                <div className="w-100 h-75 d-flex"
                                    style={{ zIndex: "1000" }}>
                                    {dataMovies?.results.filter((item) => {
                                        return item.id === parseInt(moviesId)
                                    })
                                        .map((item, i) => {
                                            return <div key={item.id * i + "e"}
                                                className="card-body text-white">
                                                <h2 className="card-title fw-bolder">
                                                    {item.title}
                                                </h2>
                                                <h2 className="card-text fw-light">
                                                    ({item.release_date})
                                                </h2>
                                                <h3>Overview</h3>
                                                <p className="card-text">
                                                    {item.overview}
                                                </p>
                                            </div>
                                        })}
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </m.div >
        )
    }
};

export { MoviesListInfo };