import React, { useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

const ContentData = createContext();

const ContentDataProvider = ({ children }) => {

    const [popularInformation, setPopularInformation] = useState({});

    const navigate = useNavigate();

    const onCardsInfo = (value) => {
        navigate("information");
        setPopularInformation(value);
    }

    return (
        <ContentData.Provider
            value={{
                popularInformation: popularInformation,
                onCardsInfo: onCardsInfo,
            }}>
            {children}
        </ContentData.Provider>
    );
}

export { ContentDataProvider, ContentData };