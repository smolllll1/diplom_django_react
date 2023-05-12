import React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageList from '@mui/material/ImageList';

export default function ScrollInfoMovies({ item }) {
    return (
        <ImageList sx={{ width: "75%", height: 250 }} cols={1} rowHeight={211}>
            {item.known_for?.map((prop, i) => {
                return <ImageListItem key={prop.id * i + "h"}
                    className="my-4 w-75">
                    < img
                        src={`http://image.tmdb.org/t/p/w500${prop.backdrop_path}`}
                        srcSet={`http://image.tmdb.org/t/p/w500${prop.backdrop_path}`}
                        className="rounded"
                        style={{ width: "75%", height: "100%", objectFit: "cover" }}
                        alt={prop.title}
                        loading="lazy" />
                    <span className="fw-bold" style={{ fontSize: "14px" }}>
                        {prop.title}
                        {prop.name}
                    </span>
                    <span className="fw-light" style={{ fontSize: "12px" }}>
                        {prop.release_date}
                    </span>
                </ImageListItem>
            })}
        </ImageList>
    );
}