import React, { useState, createContext } from "react";
import ItemList from "../components/item-list";
import ItemListInfo from "../components/item-list-info";

const ourContext = createContext()

const Content = ({ request }) => {

    const [popularInformation, setPopularInformation] = useState({});
    const [showInfo, setShowInfo] = useState(false)

    const onCardsInfo = (value) => {
        setPopularInformation(value);
        setShowInfo(true);
    }

    return (
        <ourContext.Provider value={{
            onCardsInfo: onCardsInfo,
            popularInformation: popularInformation,
            setPopularInformation: setPopularInformation
        }}>
            {showInfo === false ?
                <ItemList request={request} />
                :
                <ItemListInfo />
            }
        </ourContext.Provider>
    );
}

export { Content, ourContext };