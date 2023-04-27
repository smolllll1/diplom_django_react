import React, { useContext, Fragment } from "react";
import PersonAccount from "../components/person-account";
import { DataContext } from '../components/data-context/data-context';

const UsersAccount = () => {

    const { formikLogin } = useContext(DataContext);

    return (
        <Fragment>
            <PersonAccount formikLogin={formikLogin} />
        </Fragment>
    )
}

export default UsersAccount;