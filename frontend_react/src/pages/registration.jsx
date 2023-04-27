import React, { useContext } from "react";
import FormRegiatration from "../components/form-registration";
import Success from "../components/form-registration/success";
import { DataContext } from '../components/data-context/data-context';

const Registration = () => {

    const { formikRegistration, success } = useContext(DataContext);

    return (
        <>
            {success === false ?
                <FormRegiatration formikRegistration={formikRegistration} />
                :
                <Success formikRegistration={formikRegistration} />
            }
        </>
    )
}

export default Registration;