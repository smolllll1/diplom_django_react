import React, { createContext } from 'react';
import { useFormik } from "formik";
import { axiosBaseUrl } from "../../api/axios";

const SearchValue = createContext();

// POST URL SEARCH
const SEARCH_URL = 'search/';

const SearchValueProvider = ({ children }) => {

    // formikSearch logics
    const formikSearch = useFormik({
        initialValues: {
            searchValue: "",
        },

        // Submit form search
        onSubmit: async (values) => {
            console.log(values);

            await axiosBaseUrl.get(SEARCH_URL, values)
                .then(response => {
                    console.log(response.data)
                })
                .catch(error => {
                    console.log(error)
                });

            const cleanSearchValue = () => {
                formikSearch.values.searchValue = "";
            };

            cleanSearchValue();
        }
    });

    return (
        <SearchValue.Provider
            value={{
                formikSearch: formikSearch,
            }}
        >
            {children}
        </SearchValue.Provider>
    );
}

export { SearchValueProvider, SearchValue };