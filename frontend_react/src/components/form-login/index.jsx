import React, {useContext} from "react";
import { ourLoginValue } from "../../pages/login";

import './form-login.css';

const FormLogin = () => {

    const { formikLogin } = useContext(ourLoginValue);

    return (
        <div className="d-flex align-items-center justify-content-center wrapper-login" >
            <form className="m-5 d-flex form-login"
                onSubmit={formikLogin.handleSubmit}
            >
                <div className="wrap-form-login-text">
                    <h2 className="login-text-title">Login to your account</h2>
                    <p className="login-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <div className="wrap-form-login-input">
                        {/* Username input field */}
                        <div className="p-1">
                            <label className={`d-block pb-.5 lable-text-login
                            ${formikLogin.touched.name
                                    && formikLogin.errors.name
                                    ? "text-danger"
                                    : ""}`
                            }
                                htmlFor="name">
                                {formikLogin.touched.name
                                    && formikLogin.errors.name
                                    ? formikLogin.errors.name
                                    : "Username"
                                }
                            </label>
                            <input className="w-100 input-style-login"
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={formikLogin.values.name}
                                onChange={formikLogin.handleChange}
                                onBlur={formikLogin.handleBlur}
                            />
                        </div>
                        {/* Password input field */}
                        <div className="p-1">
                            <label className={`d-block pb-.5 lable-text-login
                            ${formikLogin.touched.password
                                    && formikLogin.errors.password
                                    ? "text-danger"
                                    : ""}`
                            }
                                htmlFor="password">
                                {formikLogin.touched.password
                                    && formikLogin.errors.password
                                    ? formikLogin.errors.password
                                    : "Password"
                                }
                            </label>
                            <input className="w-100 input-style-login"
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                autoComplete="off"
                                value={formikLogin.values.password}
                                onChange={formikLogin.handleChange}
                                onBlur={formikLogin.handleBlur}
                            />
                        </div>
                        <button className="w-50 submit-login" type="submit">
                            Login
                        </button>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default FormLogin;