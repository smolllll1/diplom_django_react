import React, { useContext } from "react";
import PersonSettings from "../components/person-settings";
import { DataContext } from '../components/data-context/data-context';

const UsersSettings = () => {

    const { formikRegistration, formikLogin } = useContext(DataContext);

    return (
        <>
            <PersonSettings
                formikRegistration={formikRegistration}
                formikLogin={formikLogin}
            />
        </>
    )
}

export default UsersSettings;