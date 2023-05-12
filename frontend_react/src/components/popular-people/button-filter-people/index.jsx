import React, { useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const ButtonFilterPeople = ({
    dataPeople,
    setFilteredPeople,
    genderPeople,
    setGenderPeople
}) => {

    useEffect(() => {
        if (genderPeople === 0) {
            setFilteredPeople(dataPeople?.results);
            return;
        };
        const filtered = dataPeople?.results.filter((people) => { 
            return people.gender === genderPeople
        });
        setFilteredPeople(filtered)

    }, [genderPeople, setFilteredPeople, dataPeople]);

    return (
        <Stack spacing={2}
            justifyContent="center"
            direction="row"
            flexWrap="wrap"
        >
            <Button onClick={() => setGenderPeople(0)}
                style={{
                    backgroundColor:'rgb(13, 37, 63)',
                    fontWeight: "bold",
                    color: '#ffffff',
                    textTransform: "capitalize",
                    margin: "2px"
                }}
                variant="text">All</Button>
            <Button onClick={() => setGenderPeople(2)}
                style={{
                    backgroundColor:'rgb(13, 37, 63)',
                    fontWeight: "bold",
                    color: '#ffffff',
                    textTransform: "capitalize",
                    margin: "2px"
                }}
                variant="text">Men</Button>
            <Button onClick={() => setGenderPeople(1)}
                style={{
                    backgroundColor:'rgb(13, 37, 63)',
                    fontWeight: "bold",
                    color: '#ffffff',
                    textTransform: "capitalize",
                    margin: "2px"
                }}
                variant="text">Women</Button>
        </Stack >
    );
}

export default ButtonFilterPeople;