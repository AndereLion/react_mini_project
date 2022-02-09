import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import ShowMovies from "../../components/ShowMovies/ShowMovies";
import {getMoviesByWord} from "../../store/slices/moviesByWord.slice";

const ByWordPage = () => {
    const {word} = useParams();
    const {moviesByWord} = useSelector(store => store.moviesByWord);
    const dispatch = useDispatch();
    let [page, setPage] = useState(1);
    useEffect(() => {
        dispatch(getMoviesByWord({word, page}));
    }, [word, page]);

    return (
        <>
         <ShowMovies page={page} setPage={setPage} movies={moviesByWord}/>
        </>
    );
};
export default ByWordPage;