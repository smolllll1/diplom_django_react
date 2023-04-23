import React, { createContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom"
import FormRegiatration from "../components/form-registration";
import axios from "../api/axios";

const ourRegistrationValue = createContext();

// Regular Expressions
const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
const nameRegExp = /^[a-zA-Zа-яА-ЯЇїІі'][a-zA-Zа-яА-ЯЇїІі' ]+[a-zA-Zа-яА-ЯЇїІі']?$/;
const emailRegExp = /^(([^<>()[\]\\.,;:\\"]+(\.[^<>()[\]\\.,;:\\"]+)*)|(\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const REGISTRATION_URL = '/registration';

const Registration = () => {

    const navigateRegistration = useNavigate();

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

        // Validate form
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

        // Submit form
        onSubmit: async (values) => {

            if (values.terms.length !== 0) {
                navigateRegistration('/')
                // console.log(values);
            }
            const response = await axios.post(REGISTRATION_URL,
                JSON.stringify({ values }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            )
            console.log(response.data);
            console.log(response.accessToken);
            console.log(JSON.stringify(response));

            // const data =(JSON.stringify(values, null, 2));

            // fetch('http://127.0.0.1:8000/registration', {
            //   method: 'POST',
            //   headers: {
            //     'Content-Type': 'application/json',
            //   },
            //   body: data,
            // })
            //   .then(response => {
            //     if (response.ok) {
            //       return response.json();
            //     } else {
            //       throw new Error('Form submission error');
            //     }
            //   })
            //   .then(data => {
            //     console.log('Form submitted successfully:', data);
            //   })
            //   .catch(error => {
            //     console.error(error);
            //   });
        }
    });

    return (
        <ourRegistrationValue.Provider value={{ formikRegistration: formikRegistration }}>
            <FormRegiatration /> :
        </ourRegistrationValue.Provider>
    )
}

export { Registration, ourRegistrationValue };