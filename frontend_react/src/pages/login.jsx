import React, { useContext, Fragment } from "react";
import FormLogin from "../components/form-login";
import { DataContext } from '../components/data-context/data-context';

const Login = () => {

    const { formikLogin } = useContext(DataContext);

    return (
        <Fragment>
            <FormLogin formikLogin={formikLogin} />
        </Fragment>
    )
}

export default Login;