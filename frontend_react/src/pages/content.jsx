import React, { useState, createContext } from "react";
import ItemList from "../components/item-list";

const ourContext = createContext()

const Content = ({ request }) => {

    const [popularInformation, setPopularInformation] = useState(null);

    const onElementInfo = (value) => {
        setPopularInformation(value)
    }

    return (
        <ourContext.Provider value={{
            onElementInfo: onElementInfo,
            popularInformation: popularInformation,
            setPopularInformation: setPopularInformation
        }}>
            <ItemList request={request} />
        </ourContext.Provider>
    );
}

export { Content, ourContext };