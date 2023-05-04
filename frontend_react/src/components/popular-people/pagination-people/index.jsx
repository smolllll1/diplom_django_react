import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationPeople = ({
    pagePeople,
    cardsPeople,
    setPagePeople,
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
                count={cardsPeople.total_pages}
                page={pagePeople}
                onChange={(event, newPage) => {
                    setPagePeople(newPage)
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

export default PaginationPeople;