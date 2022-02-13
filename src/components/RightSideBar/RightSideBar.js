import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import './RightSidebar.css';
import {getMoviesUpcoming} from "../../store/slices/moviesUpcoming.slice";

const RightSideBar = () => {

    const {moviesUpcoming} = useSelector(store => store.moviesUpcoming);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMoviesUpcoming(1));
    }, []);

    return (
        <div id={'rightSideBar'} className={'rightSideBar'}>
            {moviesUpcoming && <img src={"https://image.tmdb.org/t/p/w200/" + moviesUpcoming[0].poster_path}
                                    alt="movieImage"/>}
            <Link to={'upcoming'}><h3>Upcoming</h3></Link>
            {moviesUpcoming &&
            <div className={'upcomingMoviesList'}>
                <ol>
                    <Link to={'/moviedet/' + moviesUpcoming[0].id}>
                        <li> {moviesUpcoming[0].original_title} <h4>{moviesUpcoming[0].vote_average}/10</h4></li>
                    </Link>
                    <Link to={'/moviedet/' + moviesUpcoming[1].id}>
                        <li> {moviesUpcoming[1].original_title} <h4>{moviesUpcoming[1].vote_average}/10</h4></li>
                    </Link>
                    <Link to={'/moviedet/' + moviesUpcoming[2].id}>
                        <li> {moviesUpcoming[2].original_title} <h4>{moviesUpcoming[2].vote_average}/10</h4></li>
                    </Link>
                    <Link to={'/moviedet/' + moviesUpcoming[3].id}>
                        <li> {moviesUpcoming[3].original_title} <h4>{moviesUpcoming[3].vote_average}/10</h4></li>
                    </Link>
                    <Link to={'/moviedet/' + moviesUpcoming[4].id}>
                        <li> {moviesUpcoming[4].original_title} <h4>{moviesUpcoming[4].vote_average}/10</h4></li>
                    </Link>
                    <Link to={'/moviedet/' + moviesUpcoming[5].id}>
                        <li> {moviesUpcoming[5].original_title} <h4>{moviesUpcoming[5].vote_average}/10</h4></li>
                    </Link>
                </ol>
                {moviesUpcoming && <img src={"https://image.tmdb.org/t/p/w200/" + moviesUpcoming[6].poster_path}
                                        alt="movieImage"/>}

            </div>
            }
        </div>
    );
};

export default RightSideBar;