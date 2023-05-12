import React, { useState, createContext, useEffect } from 'react';
import { getPeoplePage, getMoviesPage } from '../../api/axios';
import { useQuery } from "react-query";
import { useLocation } from 'react-router-dom';

const ContentData = createContext();

const ContentDataProvider = ({ children }) => {

    const location = useLocation();

    // const [allPeopleId, setAllPeopleId] = useState([]);
    // console.log(allPeopleId)

    // base data default page 1 for home page random
    const [dataDefaultMovies, setDataDefaultMovies] = useState([]);

    // pagination
    const [pagePeople, setPagePeople] = useState(location.search ?
        parseInt(location?.search.split("=")[1]) : 1);
    const [pageMovies, setPageMovies] = useState(location.search ?
        parseInt(location?.search.split("=")[1]) : 1);


    useEffect(() => {
        getMoviesPage().then((data) => {
            setDataDefaultMovies(data.results);
        });
        // getAllPeopleId().then((data) => {
        //     setAllPeopleId(data.results)
        // });
    }, []);

    // pagination people
    const {
        isLoadingPeople,
        isErrorPeople,
        errorPeople,
        data: dataPeople,
    } = useQuery(["pop_people/", pagePeople], () => getPeoplePage(pagePeople), {
        keepPreviousData: true
    });

    // pagination movies
    const {
        isLoadingMovies,
        isErrorMovies,
        errorMovies,
        data: dataMovies,
    } = useQuery(["pop_movies/", pageMovies], () => getMoviesPage(pageMovies), {
        keepPreviousData: true
    });

    return (
        <ContentData.Provider
            value={{
                // movies default page 1 (home page)
                dataDefaultMovies: dataDefaultMovies,
                // movies pagination (movies page)
                pageMovies: pageMovies,
                setPageMovies: setPageMovies,
                dataMovies: dataMovies,
                isLoadingMovies: isLoadingMovies,
                isErrorMovies: isErrorMovies,
                errorMovies: errorMovies,
                // people pagination (people page)
                pagePeople: pagePeople,
                setPagePeople: setPagePeople,
                dataPeople: dataPeople,
                isLoadingPeople: isLoadingPeople,
                isErrorPeople: isErrorPeople,
                errorPeople: errorPeople,
            }}>
            {children}
        </ContentData.Provider>
    );
}

export { ContentDataProvider, ContentData };