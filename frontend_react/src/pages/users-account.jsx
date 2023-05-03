import React, { useContext, Fragment } from "react";
import PersonAccount from "../components/person-account";
import { AuthenticationData } from '../components/data/authentication-data';

const UsersAccount = () => {

    const { formikLogin } = useContext(AuthenticationData);

    return (
        <Fragment>
            <PersonAccount formikLogin={formikLogin} />
        </Fragment>
    )
}

export default UsersAccount;