import React from "react";

import './form-login.css'

const FormLogin = () => {
    return (
        <div className="d-flex align-items-center justify-content-center wrapper-login">
            <form className="m-5 d-flex form-login">
                <div className="wrap-form-login-text">
                    <h2 className="login-text-title">Login to your account</h2>
                    <p className="login-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <div className="wrap-form-login-input">
                        {/* Username input field */}
                        <div className="p-1">
                            <label className="d-block pb-.5 lable-text-login"
                                htmlFor="username">
                                Username
                            </label>
                            <input className="w-100 input-style-login"
                                type="text"
                                name="username"
                                placeholder="Enter your name"
                            />
                        </div>
                        {/* Password input field */}
                        <div className="p-1">
                            <label className="d-block pb-.5 lable-text-login"
                                htmlFor="password">
                                Password
                            </label>
                            <input className="w-100 input-style-login"
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                autoComplete="off"
                            />
                        </div>
                        <button className="w-50 submit-login" type="submit">
                            Login
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormLogin;