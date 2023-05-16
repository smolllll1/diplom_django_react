import React, { useState, createContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { axiosBaseUrl } from "../../api/axios";

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

    const navigate = useNavigate();

    // Show confetti after registration. in folder component: form-registration use pege: registration, fn submit registration
    const [success, setSuccess] = useState(false);

    // Response Registration backend onSubmit
    const [responseRegistration, setResponseRegistration] = useState(null);
    // Error Registration
    const [errMsgRegistration, setErrMsgRegistration] = useState('');

    // Response Login backend onSubmit Login localStorage
    const responseLogin = JSON.parse(localStorage.getItem('user'));
    // Error Login
    const [errMsgLogin, setErrMsgLogin] = useState('');

    // Response Logout backend onSubmit
    const [responseLogout, setResponseLogout] = useState(null);
    // Error Logout
    const [errMsgLogout, setErrMsgLogout] = useState('');

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
            await axiosBaseUrl.post(REGISTRATION_URL, values)
                .then(response => {
                    setResponseRegistration(response.data);
                })
                .catch(error => {
                    setErrMsgRegistration(error.message);
                });

            if (values.terms.length !== 0) {
                setSuccess(true);
                setErrMsgRegistration()
                setTimeout(() => {
                    setSuccess(false)
                    navigate('/login');
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
            try {
                const response = await axiosBaseUrl({
                    method: "post", url: LOGIN_URL,
                    auth: {
                        username: values.name,
                        password: values.password
                    },
                })
                if (response.status === 200) {
                    localStorage.setItem("user", JSON.stringify(response.data.loginRespons));
                    navigate(`/users/account/${response.data.loginRespons?.username}`);
                }
            } catch (error) {
                setErrMsgLogin(error.message);
            };

            const cleanLoginValue = () => {
                formikLogin.values.name = "";
                formikLogin.values.password = "";
            };

            cleanLoginValue();
        }
    });
    console.log(responseLogin.username)

    // avatar menu press logout show button login 
    const onHandlerLogout = () => {
        axiosBaseUrl.get(LOGOUT_URL)
            .then(response => {
                setResponseLogout(response.data);
            })
            .catch(error => {
                setErrMsgLogout(error.message);
            });

        localStorage.removeItem('user');
    }

    const onHandlerDeleteAccount = () => {
        console.log("delete");
        // axiosBaseUrl
        //     .delete(LOGIN_URL[responseLogin.username])
        //     .then(response => {
        //         console.log(response.status)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
    }

    return (
        <AuthenticationData.Provider value={{
            // Show confetti after registration
            success: success,
            // Registration
            formikRegistration: formikRegistration,
            responseRegistration: responseRegistration,
            errMsgRegistration: errMsgRegistration,
            // Login
            formikLogin: formikLogin,
            responseLogin: responseLogin,
            errMsgLogin: errMsgLogin,
            // Logout
            onHandlerLogout: onHandlerLogout,
            responseLogout: responseLogout,
            errMsgLogout: errMsgLogout,
            // Person settings component
            onHandlerDeleteAccount: onHandlerDeleteAccount,
        }}>
            {children}
        </AuthenticationData.Provider>
    )
}

export { AuthenticationDataProvider, AuthenticationData };