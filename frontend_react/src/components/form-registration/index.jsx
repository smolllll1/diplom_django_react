import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Home from '../../pages/home';

import './form-registration.css';

const FormRegiatration = () => {

    const [successRegistration, setSuccessRegistration] = useState(false)

    // Regular Expressions
    const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
    const nameRegExp = /^[a-zA-Zа-яА-ЯЇїІі'][a-zA-Zа-яА-ЯЇїІі' ]+[a-zA-Zа-яА-ЯЇїІі']?$/;
    const emailRegExp = /^(([^<>()[\]\\.,;:\\"]+(\.[^<>()[\]\\.,;:\\"]+)*)|(\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
                .matches(nameRegExp, 'Phone number is not valid')
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
        onSubmit: (values) => {
            
            if (values.terms.length !== 0) {
                setSuccessRegistration(values);
            }
            console.log(values.terms.length)
            const data =(JSON.stringify(values, null, 2));
            console.log(values);

            fetch('http://127.0.0.1:8000/registration', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: data,
            })
              .then(response => {
                if (response.ok) {
                  return response.json();
                } else {
                  throw new Error('Form submission error');
                }
              })
              .then(data => {
                console.log('Form submitted successfully:', data);
              })
              .catch(error => {
                console.error(error);
              });
        }
    });

    return successRegistration === false ?
        <div className="d-flex align-items-center justify-content-center wrapper-registration">
            <form className="m-4 d-flex form-registration"
                onSubmit={formikRegistration.handleSubmit}
            >
                <div className="wrap-form-registration-text">
                    <h2 className="registration-text-title">Let's get started 👋</h2>
                    <p className="registration-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <div className="wrap-form-registration-input">
                        {/* Name input field */}
                        <div className="p-1">
                            <label className={`d-block pb-.5 lable-text-registration
                             ${formikRegistration.touched.name
                                    && formikRegistration.errors.name
                                    ? "text-danger"
                                    : ""}`
                            }
                                htmlFor="name">
                                {formikRegistration.touched.name
                                    && formikRegistration.errors.name
                                    ? formikRegistration.errors.name
                                    : "Name"
                                }
                            </label>
                            <input className="input-style-registration"
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={formikRegistration.values.name}
                                onChange={formikRegistration.handleChange}
                                onBlur={formikRegistration.handleBlur}
                            />
                        </div>
                        {/* Phone input field */}
                        <div className="p-1">
                            <label className={`d-block pb-.5 lable-text-registration
                            ${formikRegistration.touched.phone
                                    && formikRegistration.errors.phone
                                    ? "text-danger"
                                    : ""}`
                            }
                                htmlFor="phone">
                                {formikRegistration.touched.phone
                                    && formikRegistration.errors.phone
                                    ? formikRegistration.errors.phone
                                    : "Phone"
                                }
                            </label>
                            <input className="input-style-registration"
                                type="tel"
                                name="phone"
                                placeholder="Enter your phone"
                                value={formikRegistration.values.phone}
                                onChange={formikRegistration.handleChange}
                                onBlur={formikRegistration.handleBlur}
                            />
                        </div>
                        {/* Email input field */}
                        <div className="p-1">
                            <label className={`d-block pb-.5 lable-text-registration
                            ${formikRegistration.touched.email
                                    && formikRegistration.errors.email
                                    ? "text-danger"
                                    : ""}`
                            }
                                htmlFor="email">
                                {formikRegistration.touched.email
                                    && formikRegistration.errors.email
                                    ? formikRegistration.errors.email
                                    : "Email"
                                }
                            </label>
                            <input className="input-style-registration"
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formikRegistration.values.email}
                                onChange={formikRegistration.handleChange}
                                onBlur={formikRegistration.handleBlur}
                            />
                        </div>
                        {/* Country input field */}
                        <div className="p-1">
                            <label className="d-block pb-.5 lable-text-registration"
                                htmlFor="country">
                                Country
                            </label>
                            <select className="input-style-registration"
                                name="country"
                                value={formikRegistration.values.country}
                                onChange={formikRegistration.handleChange}
                            >
                                <option>Unitet States</option>
                                <option>Unitet Kingdom</option>
                                <option>Germany</option>
                                <option>France</option>
                                <option>Ukraine</option>
                                <option>Poland</option>
                                <option>Italy</option>
                                <option>France</option>
                                <option>Norway</option>
                            </select>
                        </div>
                        {/* Password input field */}
                        <div className="p-1">
                            <label className={`d-block pb-.5 lable-text-registration
                            ${formikRegistration.touched.password
                                    && formikRegistration.errors.password
                                    ? "text-danger"
                                    : ""}`
                            }
                                htmlFor="password">
                                {formikRegistration.touched.password
                                    && formikRegistration.errors.password
                                    ? formikRegistration.errors.password
                                    : "Password"
                                }
                            </label>
                            <input className="input-style-registration"
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                autoComplete="off"
                                value={formikRegistration.values.password}
                                onChange={formikRegistration.handleChange}
                                onBlur={formikRegistration.handleBlur}
                            />
                        </div>
                        {/* Confirm password input field */}
                        <div className="p-1">
                            <label className={`d-block pb-.5 lable-text-registration
                            ${formikRegistration.touched.confirmPassword
                                    && formikRegistration.errors.confirmPassword
                                    ? "text-danger"
                                    : ""}`
                            }
                                htmlFor="confirm-password">
                                {formikRegistration.touched.confirmPassword
                                    && formikRegistration.errors.confirmPassword
                                    ? formikRegistration.errors.confirmPassword
                                    : "Confirm password"
                                }
                            </label>
                            <input className="input-style-registration"
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                autoComplete="off"
                                value={formikRegistration.values.confirmPassword}
                                onChange={formikRegistration.handleChange}
                                onBlur={formikRegistration.handleBlur}
                            />
                        </div>
                        {/* Terms of service */}
                        <div className="p-1">
                            <label className={`d-block pb-.5 lable-text-registration
                            ${formikRegistration.touched.terms
                                    && formikRegistration.errors.terms
                                    ? "text-danger"
                                    : ""}`
                            }
                                htmlFor="terms">
                                {formikRegistration.touched.terms
                                    && formikRegistration.errors.terms
                                    ? formikRegistration.errors.terms
                                    : "Terms of service"
                                }
                            </label>
                            <div className="d-flex gap-2">
                                <input className="input-checkbox-registration"
                                    type="checkbox"
                                    name="terms"
                                    value="checked"
                                    onChange={formikRegistration.handleChange}
                                    onBlur={formikRegistration.handleBlur}
                                />
                                <p className="registration-text-checked">
                                    I agree to the Terms and Service that my data will be taken and sold.
                                </p>
                            </div>
                        </div>
                        <button type="submit" className="w-100 submit-register">
                            Start watching today!
                        </button>
                    </div>
                </div>
                <div className="d-flex registration-image">
                    <img
                        className="w-100 movie-image"
                        src="https://image.tmdb.org/t/p/original/c3hl9E8E7b9opXDFVF5tSyk0ykr.jpg"
                        alt="form-movie"
                    />
                </div>
            </form>
        </div>
        : <Home />
}

export default FormRegiatration;