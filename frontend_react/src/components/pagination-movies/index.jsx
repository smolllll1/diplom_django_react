import React, { useContext } from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import { ContentData } from "../data/content-data";
import { NavLink } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import CircularStatic from "../progress";

const PaginationMovies = ({
    isPageMovies,
    dataMovies,
    isLoading,
    isError,
    error
}) => {

    const { onHandlerPaginationMovies } = useContext(ContentData);

    if (isLoading) return <div className="text-center mt-5">
        <CircularStatic />
    </div>;
    if (isError) return <div className="vh-100 text-secondary text-center mt-5">
        <Alert variant="danger">
            Something went wrong! Error: {error.message}
        </Alert>
    </div>;

    return (
        <Stack spacing={2}>
            <Pagination
                className='d-flex justify-content-center mb-4'
                count={dataMovies?.total_pages}
                page={isPageMovies}
                onChange={(_, newPage) => {
                    onHandlerPaginationMovies(newPage)
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