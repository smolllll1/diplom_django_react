import React, { useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const ButtonFilterPeople = ({
    propertyPeoplePopular,
    setFilteredPeople,
    genderPeople,
    setGenderPeople
}) => {

    useEffect(() => {
        if (genderPeople === 0) {
            setFilteredPeople(propertyPeoplePopular);
            return;
        };

        const filtered = propertyPeoplePopular.filter((people, i) => { 
            return people.gender === genderPeople
        });

        setFilteredPeople(filtered)

    }, [genderPeople, setFilteredPeople, propertyPeoplePopular]);

    return (
        <Stack spacing={2}
            backgroundColor="floralwhite"
            marginTop="24px"
            justifyContent="center"
            direction="row"
            flexWrap="wrap"
        >
            <Button onClick={() => setGenderPeople(0)}
                style={{
                    fontWeight: "bold",
                    color: 'rgb(13, 37, 63)',
                    textTransform: "capitalize",
                    border: "1px solid rgb(13, 37, 63)",
                    margin: "2px"
                }}
                variant="text">All</Button>
            <Button onClick={() => setGenderPeople(1)}
                style={{
                    fontWeight: "bold",
                    color: 'darkturquoise',
                    textTransform: "capitalize",
                    border: "1px solid darkturquoise",
                    margin: "2px"
                }}
                variant="text">Women</Button>
            <Button onClick={() => setGenderPeople(2)}
                style={{
                    fontWeight: "bold",
                    color: 'darkturquoise',
                    textTransform: "capitalize",
                    border: "1px solid darkturquoise",
                    margin: "2px"
                }}
                variant="text">Men</Button>
        </Stack >
    );
}

export default ButtonFilterPeople;