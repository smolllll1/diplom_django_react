import React, { useContext } from "react";
import PersonAccount from "../components/person-account";
import { DataContext } from '../components/data-context/data-context';

const UsersAccount = () => {

    const { formikRegistration, formikLogin } = useContext(DataContext);

    return (
        <>
            <PersonAccount
                formikRegistration={formikRegistration}
                formikLogin={formikLogin}
            />
        </>
    )
}

export default UsersAccount;