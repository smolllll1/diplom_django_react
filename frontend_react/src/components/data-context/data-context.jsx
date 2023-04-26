import React, { useState, createContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";

// Data with Form-Registration and Form-Login inputs
const DataContext = createContext({});

// Regular Expressions
const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
// const nameRegExp = /^[a-zA-Zа-яА-ЯЇїІі'][a-zA-Zа-яА-ЯЇїІі' ]+[a-zA-Zа-яА-ЯЇїІі']?$/;
const nameRegExp = /^[a-zA-Za-яА-ЯЇїІі0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Za-яА-ЯЇїІі0-9]){1,18}[a-zA-Za-яА-ЯЇїІі0-9]?$/;
const emailRegExp = /^(([^<>()[\]\\.,;:\\"]+(\.[^<>()[\]\\.,;:\\"]+)*)|(\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// POST URL REGISTRATION
const REGISTRATION_URL = 'registration/';
// POST URL LOGIN
const LOGIN_URL = 'login/';

const DataProvider = ({ children }) => {

    // Show confetti after registration. use state - component: form-registration pege: registration
    const [success, setSuccess] = useState(false);
    // Hide button registration after registration. use state - component: login-nav 
    const [hideButtonRegistration, setHideButtonRegistration] = useState(false);
    // Hide button login but show avatar and bell after login. use state - component: login-nav
    const [hideButtonLogin, setHideButtonLogin] = useState(false);

    const navigate = useNavigate();

    // formikRegistration logics
    const formikRegistration = useFormik({
        initialValues: {
            name: "",
            phone: "",
            email: "",
            country: "Ukraine",
            password: "",
            confirmPassword: "",
            terms: "",
        },

        // Validate form registration
        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, 'Name is short')
                .max(20, 'Name must be 20 characters or less.')
                .matches(nameRegExp, 'Name is not valid')
                .required('Name is required'),
            phone: Yup.string()
                .matches(phoneRegExp, 'Phone number is not valid')
                .required('Phone is required'),
            email: Yup.string()
                .matches(emailRegExp, 'Invalid email address.')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Password is short')
                .max(20, 'Password must be 20 characters or less.')
                .required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Confirmed password is not correct.')
                .required('Confirm password is required'),
            terms: Yup.array()
                .required('Terms of service must be checked'),
        }),

        // Submit form registration
        onSubmit: async (values) => {

            if (values.terms.length !== 0) {
                setSuccess(true);
                setTimeout(() => {
                    navigate('/login');
                    setSuccess(false);
                    setHideButtonRegistration(true);
                }, 5000)
                // console.log(values);
            }

            await axios.post(REGISTRATION_URL, values)
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    });

    // formikLogin logics
    const formikLogin = useFormik({

        initialValues: {
            name: "",
            password: "",
        },

        // Validate form login
        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, 'Name is short')
                .max(20, 'Name must be 20 characters or less.')
                .matches(nameRegExp, 'Name is not valid')
                .required('Name is required'),
            password: Yup.string()
                .min(6, 'Password is short')
                .max(20, 'Password must be 20 characters or less.')
                .required('Password is required'),
        }),

        // Submit form login
        onSubmit: async (values) => {
            navigate('/users/account');
            setHideButtonLogin(true)
            console.log(values);

            await axios.post(LOGIN_URL, values)
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    });

    return (
        <DataContext.Provider value={{
            formikRegistration: formikRegistration,
            formikLogin: formikLogin,
            success: success,
            hideButtonRegistration: hideButtonRegistration,
            hideButtonLogin: hideButtonLogin,
        }}>
            {children}
        </DataContext.Provider>
    )
}

export { DataProvider, DataContext }