import React, { useState, createContext } from "react";
import ItemList from "../components/item-list";

const ourContext = createContext()

const Content = ({ request }) => {

    const [popularInformation, setPopularInformation] = useState(null);
    
    const onCardsInfo = (value) => {
        setPopularInformation(value)
    }

    return (
        <ourContext.Provider value={{
            onCardsInfo: onCardsInfo,
            popularInformation: popularInformation,
            setPopularInformation: setPopularInformation
        }}>
            <ItemList request={request} />
        </ourContext.Provider>
    );
}

export { Content, ourContext };