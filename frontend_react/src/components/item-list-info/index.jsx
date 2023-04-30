import React, { useContext, useEffect, useState } from "react";
import { motion as m } from 'framer-motion';
import { ourContext } from "../../pages/content";

const ItemListInfo = () => {

    const [information, setInformation] = useState(null);
    const [image, setImage] = useState(null);
    const { popularInformation } = useContext(ourContext);
    console.log(popularInformation.backdrop_path)

    useEffect(() => {

        setInformation(popularInformation);

        if(popularInformation !== null) {
            

        }


        
        
    }, [popularInformation]);

    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="d-flex w-100 justify-content-start px-3"
            style={{ backgroundColor: 'floralwhite' }}
        >
            <div className="card mb-3 mt-3 w-50" >
                <img
                    src='https://image.tmdb.org/t/p/original/ovM06PdF3M8wvKb06i4sjW3xoww.jpg'
                    className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </m.div >

    )
};

export default ItemListInfo;