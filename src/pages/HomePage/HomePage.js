import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import '../../components/ShowMovies/ShowMovies.css';
import {getAllMoviesByPage} from "../../store/slices/movie.slice";
import ShowMovies from "../../components/ShowMovies/ShowMovies";

const HomePage = ({homePage}) => {
    const {movies} = useSelector(store => store.movies);
    const dispatch = useDispatch();
    let [page, setPage] = useState(homePage);

    useEffect(() => {
        dispatch(getAllMoviesByPage(page));
    }, [page]);

    return (
        <>
            <ShowMovies page={page} setPage={setPage} movies={movies}/>
        </>
    );
};

export default HomePage;