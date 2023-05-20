import React, { useContext, Fragment } from "react";
import FormLogin from "../components/form-login";
import { AuthenticationData } from '../components/data/authentication-data';

const Login = () => {

    const { formikLogin } = useContext(AuthenticationData);

    return (
        <Fragment>
            <FormLogin formikLogin={formikLogin} />
        </Fragment>
    )
}

export { Login };