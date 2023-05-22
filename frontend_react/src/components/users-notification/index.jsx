import React, { Fragment, useContext, useEffect } from 'react';
import { useState } from 'react';
import { AuthenticationData } from '../data/authentication-data';

const UsersNotification = () => {

    const { responseLogin } = useContext(AuthenticationData);
    const [notification, setNotification] = useState([])

    useEffect(() => {
        setNotification(responseLogin.last_login)
    }, [responseLogin]);
    console.log(notification)
    
    return (
        <Fragment>
            <h2>Notifications</h2>
            <h6>Notifications</h6>
            <section>
                {/* {notification.map((item, i) => {
                    console.log(item)
                    return <ul key={i * 5 + "f"} className="list-unstyled mb-2 text-secondary">
                        <li>{item}</li>
                    </ul>
                })
                } */}
            </section>
        </Fragment >
    );
}

export { UsersNotification };