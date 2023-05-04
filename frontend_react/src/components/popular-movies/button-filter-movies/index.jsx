import React, { useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const ButtonFilterMovies = ({
    propertyMoviesPopular,
    setFilteredMovies,
    activeGenre,
    setActiveGenre
}) => {

    useEffect(() => {
        if (activeGenre === 0) {
            setFilteredMovies(propertyMoviesPopular);
            return;
        };

        const filtered = propertyMoviesPopular.filter((movie) => {
            return movie.genre_ids.includes(activeGenre);
        });
        setFilteredMovies(filtered)

    }, [activeGenre, setFilteredMovies, propertyMoviesPopular]);

    return (
        <Stack spacing={2}
            backgroundColor="floralwhite"
            justifyContent="center"
            direction="row"
            flexWrap="wrap"
        >
            <Button onClick={() => setActiveGenre(0)}
                style={{
                    fontWeight: "bold",
                    color: 'rgb(13, 37, 63)',
                    textTransform: "capitalize",
                    border: "1px solid rgb(13, 37, 63)",
                    margin: "2px"
                }}
                variant="text">All</Button>
            <Button onClick={() => setActiveGenre(35)}
                style={{
                    fontWeight: "bold",
                    color: 'darkturquoise',
                    textTransform: "capitalize",
                    border: "1px solid darkturquoise",
                    margin: "2px"
                }}
                variant="text">Comedy</Button>
            <Button onClick={() => setActiveGenre(28)}
                style={{
                    fontWeight: "bold",
                    color: 'darkturquoise',
                    textTransform: "capitalize",
                    border: "1px solid darkturquoise",
                    margin: "2px"
                }}
                variant="text">Action</Button>
            <Button onClick={() => setActiveGenre(36)}
                style={{
                    fontWeight: "bold",
                    color: 'darkturquoise',
                    textTransform: "capitalize",
                    border: "1px solid darkturquoise",
                    margin: "2px"
                }}
                variant="text">History</Button>
            <Button onClick={() => setActiveGenre(14)}
                style={{
                    fontWeight: "bold",
                    color: 'darkturquoise',
                    textTransform: "capitalize",
                    border: "1px solid darkturquoise",
                    margin: "2px"
                }}
                variant="text">Fantasy</Button>
            <Button onClick={() => setActiveGenre(27)}
                style={{
                    fontWeight: "bold",
                    color: 'darkturquoise',
                    textTransform: "capitalize",
                    border: "1px solid darkturquoise",
                    margin: "2px"
                }}
                variant="text">Horror</Button>
            <Button onClick={() => setActiveGenre(16)}
                style={{
                    fontWeight: "bold",
                    color: 'darkturquoise',
                    textTransform: "capitalize",
                    border: "1px solid darkturquoise",
                    margin: "2px"
                }}
                variant="text">Animation</Button>
            <Button onClick={() => setActiveGenre(80)}
                style={{
                    fontWeight: "bold",
                    color: 'darkturquoise',
                    textTransform: "capitalize",
                    border: "1px solid darkturquoise",
                    margin: "2px"
                }}
                variant="text">Crime</Button>
            <Button onClick={() => setActiveGenre(10751)}
                style={{
                    fontWeight: "bold",
                    color: 'darkturquoise',
                    textTransform: "capitalize",
                    border: "1px solid darkturquoise",
                    margin: "2px"
                }}
                variant="text">Family</Button>
        </Stack >
    );
}

export default ButtonFilterMovies;