import React, { useContext } from "react";
import { getAllMoviesId } from '../../api/axios';
import { motion as m } from 'framer-motion';
import CircularStatic from "../progress";
import { ContentData } from "../data/content-data";
import { useQuery } from "react-query";
import Alert from 'react-bootstrap/Alert';

const MoviesListInfo = () => {

    // click cards movies id
    const { isCardsMoviesId } = useContext(ContentData);

    // cards movies
    const {
        isLoading,
        isError,
        error,
        data: listInfoMovies,
    } = useQuery(["pop_movies", isCardsMoviesId], () => getAllMoviesId(isCardsMoviesId), {
        keepPreviousData: true
    });

    if (isLoading) return <div className="text-center vh-100 mt-5">
        <CircularStatic />
    </div>;
    if (isError) return <div className="vh-100 text-secondary text-center mt-5">
        <Alert variant="danger">
            Something went wrong! Error: {error.message}
        </Alert>
    </div>;

    if (listInfoMovies) {
        return (
            <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="d-flex w-100 justify-content-center px-3">
                {isLoading === true ?
                    <div className="mt-5">
                        <CircularStatic />
                    </div>
                    :
                    <div className="card my-3 position-relative w-100"
                        style={{ backgroundColor: 'rgba(13, 37, 63, 1)' }}>
                        <img src={`https://image.tmdb.org/t/p/original${listInfoMovies?.backdrop_path}`}
                            className="rounded position-absolute opacity-50"
                            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
                            alt={listInfoMovies?.title} />
                        <div className="row g-0">
                            <div className="col-md-4 d-flex vh-100 justify-content-center align-items-center">
                                <div className="w-75 h-75 d-flex">
                                    <img src={`https://image.tmdb.org/t/p/original${listInfoMovies?.backdrop_path}`}
                                        className="rounded"
                                        style={{ width: "100%", objectFit: "cover", zIndex: "1000" }}
                                        alt={listInfoMovies?.title} />
                                </div>
                            </div>
                            <div className="col-md-8 d-flex vh-100 justify-content-center align-items-center">
                                <div className="w-100 h-75 d-flex"
                                    style={{ zIndex: "1000" }}>
                                    <div className="card-body text-white">
                                        <h2 className="card-title fw-bolder">
                                            {listInfoMovies?.title}
                                        </h2>
                                        <h2 className="card-text fw-light">
                                            ({listInfoMovies?.release_date})
                                        </h2>
                                        <h3>Overview</h3>
                                        <p className="card-text">
                                            {listInfoMovies?.overview}
                                        </p>
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

export { MoviesListInfo };