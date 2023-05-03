import React, { useContext, Fragment } from "react";
import FormRegiatration from "../components/form-registration";
import Success from "../components/form-registration/success";
import { AuthenticationData } from '../components/data/authentication-data';

const Registration = () => {

    const { formikRegistration, success } = useContext(AuthenticationData);

    return (
        <Fragment>
            {success === false ?
                <FormRegiatration formikRegistration={formikRegistration} />
                :
                <Success formikRegistration={formikRegistration} />
            }
        </Fragment>
    )
}

export default Registration;