import React, { useContext, Fragment } from "react";
import FormRegiatration from "../components/form-registration";
import Success from "../components/form-registration/success";
import { DataContext } from '../components/data-context/data-context';

const Registration = () => {

    const { formikRegistration, success } = useContext(DataContext);

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