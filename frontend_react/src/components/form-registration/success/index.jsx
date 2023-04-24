import React, { useContext } from "react";
import { ourRegistrationValue } from "../../../pages/registration";

const Success = () => {

    const { formikRegistration } = useContext(ourRegistrationValue);

    return (<div className="vh-100 d-flex align-items-center justify-content-center wrapper-registration">
        <div className="p-2 bg-white d-flex row fs-5 text-center wrap-form-registration-text"
            style={{ maxWidth: "60%" }}>
            <h1 className="">Thanks for the email {formikRegistration.values.name} ✨</h1>
            <p>We have send you an email over at {formikRegistration.values.email}.
                Please confirm the registration.
            </p>
        </div>
    </div>
    )
}

export default Success;