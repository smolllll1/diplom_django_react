import React, { useState, createContext } from 'react';
import { useFormik } from "formik";
import { axiosBaseUrl } from "../../api/axios";
import { useQuery } from "react-query";
import Alert from 'react-bootstrap/Alert';
import CircularStatic from "../progress";
import { getSearchPeople } from '../../api/axios';

const SearchData = createContext();

// POST URL SEARCH
const SEARCH_URL = 'search/';

const SearchValueProvider = ({ children }) => {

    // search text
    const [isSearchValue, setIsSearchValue] = useState("");

    // formikSearch logics
    const formikSearch = useFormik({
        initialValues: {
            searchValue: "",
        },

        // Submit form search
        onSubmit: async (values) => {
            setIsSearchValue(values.searchValue);

            await axiosBaseUrl.get(SEARCH_URL, values)
                .then(response => {
                    console.log(response.data)
                })
                .catch(error => {
                    console.log(error)
                });
        }
    });

    // search people
    const {
        isLoading,
        isError,
        error,
        data: searchPeopleResults,
    } = useQuery(["search_people/?pege=", isSearchValue], () => getSearchPeople(isSearchValue), {
        keepPreviousData: true
    });
    // console.log(searchPeopleResults)

    if (isLoading) return <div className="text-center vh-100 mt-5">
        <CircularStatic />
    </div>;
    if (isError) return <div className="vh-100 text-secondary text-center mt-5">
        <Alert variant="danger">
            Something went wrong! Error: {error.message}
        </Alert>
    </div>

    return (
        <SearchData.Provider
            value={{
                formikSearch: formikSearch,
                isSearchValue: isSearchValue,
            }}
        >
            {children}
        </SearchData.Provider>
    );
}

export { SearchValueProvider, SearchData };