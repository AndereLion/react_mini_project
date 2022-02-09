import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import './MovieDetailsPage.css';
import {getMoviesById} from "../../store/slices/movieDetails.slice";
import {useParams} from "react-router-dom";

const MovieDetailsPage = () => {
    const {id} = useParams();
    const {moviesById} = useSelector(store => store.moviesById);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMoviesById(id))
    }, [id]);

    return (
        <div className={'detailsPage'}>

            {moviesById.poster_path && <img src={"https://image.tmdb.org/t/p/w300/" + moviesById.poster_path}
                                            alt="movieImage"/>}
            <div className={'detailsPageRight'}>
                <h4>{moviesById.original_title}</h4>
                <h4>Average vote  {moviesById.vote_average}/10</h4>
                <h4>Overview</h4>
                <p> {moviesById.overview}</p>
                <h4>Release date</h4>
                <p>{moviesById.release_date}</p>
            </div>

        </div>
    );
};

export default MovieDetailsPage;