import React, { useContext } from "react";
import { getAllMoviesId } from '../../api/axios';
import { motion as m } from 'framer-motion';
import CircularStatic from "../progress";
import { ContentData } from "../data/content-data";
import { useQuery } from "react-query";
import Alert from 'react-bootstrap/Alert';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const MoviesListInfo = () => {

    const navigate = useNavigate();
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

    const useStyleBtnGoBack = {
        button: {
            backgroundColor: "#01D277",
            color: 'floralwhite',
            textTransform: "capitalize",
            '&:hover': {
                backgroundColor: "#90cea1",
            },
        }
    }

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
                className="d-flex row w-100 justify-content-center px-3">
                {isLoading === true ?
                    <div className="mt-5">
                        <CircularStatic />
                    </div>
                    :
                    <div className="d-flex card my-3 p-0 position-relative w-100"
                        style={{ backgroundColor: 'rgba(13, 37, 63, 1)' }}>
                        <img
                            src={`https://image.tmdb.org/t/p/original${listInfoMovies?.backdrop_path}`}
                            className="rounded position-absolute opacity-25"
                            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
                            alt={listInfoMovies?.title}
                        />
                        <div className="row g-0">
                            <div className="col-md-4 d-flex p-5 vh-100 justify-content-center align-items-center">
                                <div className="w-100 h-100 d-flex">
                                    <img src={`https://image.tmdb.org/t/p/original${listInfoMovies?.backdrop_path}`}
                                        className="rounded"
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                        alt={listInfoMovies?.title} />
                                </div>
                            </div>
                            <div className="col-md-8 d-flex vh-100 justify-content-center align-items-center">
                                <div className="w-100 h-75 d-flex row"
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
                                        <Button className="fs-5"
                                            variant="contained"
                                            onClick={() => { navigate(-1) }}
                                            sx={useStyleBtnGoBack.button}
                                        >
                                            Go Back
                                        </Button>
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