import React, { useContext, Fragment } from "react";
import PersonSettings from "../components/person-settings";
import { DataContext } from '../components/data-context/data-context';

const UsersSettings = () => {

    const { formikLogin } = useContext(DataContext);

    return (
        <Fragment>
            <PersonSettings formikLogin={formikLogin}/>
        </Fragment>
    )
}

export default UsersSettings;