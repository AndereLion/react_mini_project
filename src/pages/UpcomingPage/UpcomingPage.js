import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import ShowMovies from "../../components/ShowMovies/ShowMovies";
import {getMoviesUpcoming} from "../../store/slices/moviesUpcoming.slice";

const UpcomingPage = () => {
    const {moviesUpcoming} = useSelector(store => store.moviesUpcoming);
    const dispatch = useDispatch();
    let [page, setPage] = useState(1);
    useEffect(() => {
        dispatch(getMoviesUpcoming(page));
    }, [page]);
    return (
        <>
            <ShowMovies page={page} setPage={setPage} movies={moviesUpcoming}/>
        </>
    );
};

export default UpcomingPage;