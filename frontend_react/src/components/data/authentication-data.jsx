import React, { useState, createContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";

// Data with Form-Registration and Form-Login inputs
const AuthenticationData = createContext({});

// Regular Expressions
const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
const nameRegExp = /^[a-zA-Za-яА-ЯЇїІі0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Za-яА-ЯЇїІі0-9]){1,20}[a-zA-Za-яА-ЯЇїІі0-9]?$/;
const emailRegExp = /^(([^<>()[\]\\.,;:\\"]+(\.[^<>()[\]\\.,;:\\"]+)*)|(\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// POST URL REGISTRATION
const REGISTRATION_URL = 'registration/';
// POST URL LOGIN
const LOGIN_URL = 'login/';
// GET URL LOGOUT
const LOGOUT_URL = 'logout/';

const AuthenticationDataProvider = ({ children }) => {

    // Show confetti after registration. use state - component: form-registration pege: registration
    const [success, setSuccess] = useState(false);
    // Hide button registration after registration. use state - component: login-nav 
    const [hideButtonRegistration, setHideButtonRegistration] = useState(false);
    // Hide button login but show avatar and bell after login. use state - component: login-nav
    const [hideButtonLogin, setHideButtonLogin] = useState(false);
    // Response Login backend onSubmit
    const [responseLogin, setResponseLogin] = useState(null);

    // Response Registration backend onSubmit
    const [responseRegistration, setResponseRegistration] = useState(null);
    // Error Registration
    const [errMsgRegistration, setErrMsgRegistration] = useState('')

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

            await axios.post(REGISTRATION_URL, values)
                .then(response => {
                    // console.log(response.data);
                    setResponseRegistration(response.data.message)
                })
                .catch(error => {
                    setErrMsgRegistration(error);
                });

            if (values.terms.length !== 0) {
                // -------------------------------NEW PAGE UNAUTHORIZED--------------------------------------------------------
                // if (responseRegistration) {
                // }
                setSuccess(true);
                setErrMsgRegistration()
                setTimeout(() => {
                    setSuccess(false)
                    navigate('/login');
                    setHideButtonRegistration(true);
                    cleanRegistrationValue();
                }, 5000)

            }

            const cleanRegistrationValue = () => {
                formikRegistration.values.name = "";
                formikRegistration.values.phone = "";
                formikRegistration.values.email = "";
                formikRegistration.values.password = "";
                formikRegistration.values.confirmPassword = "";
                formikRegistration.values.terms = "";
            };
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
            // console.log(values);

            await axios.post(LOGIN_URL, values)
                .then(response => {
                    setResponseLogin(response.data.loginRespons)
                })
                .catch(error => {
                    console.log(error)
                });

            const cleanLoginValue = () => {
                formikLogin.values.name = "";
                formikLogin.values.password = "";
            };

            cleanLoginValue();
        }
    });

    // avatar menu press logout show button login 
    const onHandlerLogout = () => {
        // console.log('isLogout');
        setHideButtonLogin(false);
        setHideButtonRegistration(true);

        axios.get(LOGOUT_URL)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <AuthenticationData.Provider value={{
            formikRegistration: formikRegistration,
            responseRegistration: responseRegistration,
            errMsgRegistration: errMsgRegistration,
            formikLogin: formikLogin,
            responseLogin: responseLogin,
            success: success,
            hideButtonRegistration: hideButtonRegistration,
            hideButtonLogin: hideButtonLogin,
            onHandlerLogout: onHandlerLogout,
        }}>
            {children}
        </AuthenticationData.Provider>
    )
}

export { AuthenticationDataProvider, AuthenticationData }