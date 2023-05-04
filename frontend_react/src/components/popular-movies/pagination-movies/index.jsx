import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationMovies = ({
    pageMovies,
    cardsMovies,
    setPageMovies,
    isLoading,
    isError,
    error
}) => {

    if (isLoading) return <p>Loading pages...</p>
    if (isError) return <p>Error: {error.massege}</p>

    return (
        <Stack spacing={2}>
            <Pagination
                className='d-flex justify-content-center mb-4'
                count={cardsMovies.total_pages}
                page={pageMovies}
                onChange={(event, newPage) => {
                    setPageMovies(newPage)
                }}
                showFirstButton
                showLastButton
                shape='rounded'
                sx={{
                    "Button.MuiPaginationItem-rounded.Mui-selected": {
                        bgcolor: "darkturquoise",
                        color: "white",
                    }
                }}
            />
        </Stack>
    );
}

export default PaginationMovies;