import React, { useContext } from "react";
import FormLogin from "../components/form-login";
import { DataContext } from '../components/data-context/data-context';

const Login = () => {

    const { formikLogin } = useContext(DataContext);

    return (
        <>
            <FormLogin formikLogin={formikLogin} />
        </>
    )
}

export default Login;