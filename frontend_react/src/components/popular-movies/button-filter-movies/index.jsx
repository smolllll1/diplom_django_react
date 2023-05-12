import React, { useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const ButtonFilterMovies = ({
    dataMovies,
    setFilteredMovies,
    activeGenre,
    setActiveGenre
}) => {

    useEffect(() => {
        if (activeGenre === 0) {
            setFilteredMovies(dataMovies?.results);
            return;
        };
        const filtered = dataMovies?.results.filter((movie) => {
            return movie.genre_ids.includes(activeGenre);
        });
        setFilteredMovies(filtered)

    }, [activeGenre, setFilteredMovies, dataMovies]);

    return (
        <Stack spacing={2}
            justifyContent="center"
            direction="row"
            flexWrap="wrap"
        >
            <Button onClick={() => setActiveGenre(0)}
                style={{
                    backgroundColor:"rgb(1, 180, 228)",
                    fontWeight: "bold",
                    color: '#ffffff',
                    textTransform: "capitalize",
                    margin: "2px"
                }}
                variant="text">All</Button>
            <Button onClick={() => setActiveGenre(28)}
                style={{
                    backgroundColor:"rgb(1, 180, 228)",
                    fontWeight: "bold",
                    color: '#ffffff',
                    textTransform: "capitalize",
                    margin: "2px"
                }}
                variant="text">Action</Button>
            <Button onClick={() => setActiveGenre(12)}
                style={{
                    backgroundColor:"rgb(1, 180, 228)",
                    fontWeight: "bold",
                    color: '#ffffff',
                    textTransform: "capitalize",
                    margin: "2px"
                }}
                variant="text">Adventure</Button>
            <Button onClick={() => setActiveGenre(16)}
                style={{
                    backgroundColor:"rgb(1, 180, 228)",
                    fontWeight: "bold",
                    color: '#ffffff',
                    textTransform: "capitalize",
                    margin: "2px"
                }}
                variant="text">Animation</Button>
            <Button onClick={() => setActiveGenre(35)}
                style={{
                    backgroundColor:"rgb(1, 180, 228)",
                    fontWeight: "bold",
                    color: '#ffffff',
                    textTransform: "capitalize",
                    margin: "2px"
                }}
                variant="text">Comedy</Button>
            <Button onClick={() => setActiveGenre(80)}
                style={{
                    backgroundColor:"rgb(1, 180, 228)",
                    fontWeight: "bold",
                    color: '#ffffff',
                    textTransform: "capitalize",
                    margin: "2px"
                }}
                variant="text">Crime</Button>
            <Button onClick={() => setActiveGenre(18)}
                style={{
                    backgroundColor:"rgb(1, 180, 228)",
                    fontWeight: "bold",
                    color: '#ffffff',
                    textTransform: "capitalize",
                    margin: "2px"
                }}
                variant="text">Drama</Button>
            <Button onClick={() => setActiveGenre(10751)}
                style={{
                    backgroundColor:"rgb(1, 180, 228)",
                    fontWeight: "bold",
                    color: '#ffffff',
                    textTransform: "capitalize",
                    margin: "2px"
                }}
                variant="text">Family</Button>
            <Button onClick={() => setActiveGenre(14)}
                style={{
                    backgroundColor:"rgb(1, 180, 228)",
                    fontWeight: "bold",
                    color: '#ffffff',
                    textTransform: "capitalize",
                    margin: "2px"
                }}
                variant="text">Fantasy</Button>
            <Button onClick={() => setActiveGenre(36)}
                style={{
                    backgroundColor:"rgb(1, 180, 228)",
                    fontWeight: "bold",
                    color: '#ffffff',
                    textTransform: "capitalize",
                    margin: "2px"
                }}
                variant="text">History</Button>
            <Button onClick={() => setActiveGenre(27)}
                style={{
                    backgroundColor:"rgb(1, 180, 228)",
                    fontWeight: "bold",
                    color: '#ffffff',
                    textTransform: "capitalize",
                    margin: "2px"
                }}
                variant="text">Horror</Button>
        </Stack >
    );
}

export default ButtonFilterMovies;