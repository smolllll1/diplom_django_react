import React, { useContext, Fragment } from "react";
import PersonSettings from "../components/person-settings";
import { AuthenticationData } from '../components/data/authentication-data';

const UsersSettings = () => {

    const { formikLogin } = useContext(AuthenticationData);

    return (
        <Fragment>
            <PersonSettings formikLogin={formikLogin}/>
        </Fragment>
    )
}

export default UsersSettings;