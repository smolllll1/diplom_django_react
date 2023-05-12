import React, {useContext} from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import { ContentData } from "../data/content-data";
import { NavLink } from 'react-router-dom';

const PaginationPeople = () => {

    const {
        pagePeople,
        dataPeople,
        setPagePeople,
        isLoadingPeople,
        isErrorPeople,
        errorPeople,
    } = useContext(ContentData);

    if (isLoadingPeople) return <p>Loading pages...</p>
    if (isErrorPeople) return <p>Error: {errorPeople.massege}</p>

    return (
        <Stack spacing={2}>
            <Pagination
                className='d-flex justify-content-center mb-4'
                count={dataPeople?.total_pages}
                page={pagePeople}
                onChange={(_, newPage) => {
                    setPagePeople(newPage)
                }}
                renderItem={(item) => (
                    <PaginationItem
                        component={NavLink}
                        to={`/pop_people${item.page === 1 ? "" : `?page=${item.page}`}`}
                        {...item}
                    />
                )}
                showFirstButton
                showLastButton
                siblingCount={1}
                shape='rounded'
                sx={{
                    "a.MuiPaginationItem-rounded.Mui-selected": {
                        bgcolor: "rgb(13, 37, 63)",
                        color: "#ffffff",
                    }
                }}
            />
        </Stack>
    );
}

export default PaginationPeople;