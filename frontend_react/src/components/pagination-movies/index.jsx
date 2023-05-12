import React, { useContext } from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import { ContentData } from "../data/content-data";
import { NavLink } from 'react-router-dom';

const PaginationMovies = () => {

    const {
        pageMovies,
        dataMovies,
        setPageMovies,
        isLoadingMovies,
        isErrorMovies,
        errorMovies,
    } = useContext(ContentData);

    if (isLoadingMovies) return <p>Loading pages...</p>
    if (isErrorMovies) return <p>Error: {errorMovies.massege}</p>

    return (
        <Stack spacing={2}>
            <Pagination
                className='d-flex justify-content-center mb-4'
                count={dataMovies?.total_pages}
                page={pageMovies}
                onChange={(_, newPage) => {
                    setPageMovies(newPage)
                }}
                renderItem={(item) => (
                    <PaginationItem
                        component={NavLink}
                        to={`/pop_movies${item.page === 1 ? "" : `?page=${item.page}`}`}
                        {...item}
                    />
                )}
                showFirstButton
                showLastButton
                siblingCount={1}
                shape='rounded'
                sx={{
                    "a.MuiPaginationItem-rounded.Mui-selected": {
                        bgcolor: "rgb(1, 180, 228)",
                        color: "white",
                    },
                    "a.MuiPaginationItem-rounded": {
                        color: "#ffffff"
                    }
                }}
            />
        </Stack>
    );
}

export default PaginationMovies;