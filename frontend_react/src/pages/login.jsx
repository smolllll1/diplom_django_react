import React, { createContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import FormLogin from "../components/form-login";
import axios from "../api/axios";

const ourLoginValue = createContext();

// Regular Expressions
const nameRegExp = /^[a-zA-Za-яА-ЯЇїІі0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Za-яА-ЯЇїІі0-9]){1,18}[a-zA-Za-яА-ЯЇїІі0-9]?$/;

// POST URL LOGIN
const LOGIN_URL = 'login/';

const Login = () => {

    const navigateLogin = useNavigate();

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
            navigateLogin('/users/account')
            console.log(values);

            await axios.post(LOGIN_URL, values)
            .then(response =>{
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        }
    });

    return (
        <ourLoginValue.Provider value={{ formikLogin: formikLogin }}>
            <FormLogin />
        </ourLoginValue.Provider>
    )
}

export { Login, ourLoginValue };