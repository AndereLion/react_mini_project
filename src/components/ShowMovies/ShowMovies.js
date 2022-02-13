import React from 'react';
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";

import arrowLeft from "../../images/kindpng_345031.png"
import arrowRight from "../../images/pngaaa.com-92323.png"
import './ShowMovies.css';

const ShowMovies = ({page, setPage, movies}) => {

    const {register, handleSubmit, reset} = useForm();

    const onSubmit = ({page}) => {
        reset();
        if (page > 0 && page <= 500) setPage(Number(page))
    };

    return (
        <div className={'allMovies'}>
            <div id={'allPosters'} className={'allPosters'}>
                {movies && movies.map((movie) =>
                    <div className={'posterDiv'} key={movie.id}>
                        <Link to={'/moviedet/' + movie.id}>
                            {movie.poster_path && <img src={"https://image.tmdb.org/t/p/w200/" + movie.poster_path}
                                                       alt="movieImage"/>}
                            <h4>{movie.original_title}</h4>
                        </Link>
                    </div>
                )}
            </div>
            <div className={'allMoviesButtonsWrap'}>
                <div className={'allMoviesButtons'}>

                    <button onClick={() => {
                        {
                            (page > 1) && setPage(page - 1);
                        }
                    }}> <img src={arrowLeft} alt="arrowleft"/>
                    </button>
                    <h4>Page {page}</h4>
                    <button onClick={() => {
                        if (page < 500) setPage(page + 1);
                    }}><img src={arrowRight} alt="arrowleft"/>
                    </button>
                </div>

                <form id={'toPageForm'} className={'toPageForm'} onSubmit={handleSubmit(onSubmit)}>
                    <button type="submit">To page</button>
                    <input className={'inputForPages'} type="number" {...register('page')} />
                </form>
            </div>
        </div>
    );
};

export default ShowMovies;