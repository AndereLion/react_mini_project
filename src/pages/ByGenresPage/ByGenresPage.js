import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import {getMoviesByGenre} from "../../store/slices/moviesBygenre.slice";
import ShowMovies from "../../components/ShowMovies/ShowMovies";

const ByGenresPage = () => {
    const {genre} = useParams();
    const {moviesByGenre} = useSelector(store => store.moviesByGenre);
    const dispatch = useDispatch();
    let [page, setPage] = useState(1);
    useEffect(() => {
        dispatch(getMoviesByGenre({genre, page}));
    }, [genre, page]);

    return (
        <>
            <ShowMovies page={page} setPage={setPage} movies={moviesByGenre}/>
        </>
    );
};

export default ByGenresPage;