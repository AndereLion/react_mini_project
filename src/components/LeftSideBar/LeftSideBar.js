import React from 'react';
import {Link} from "react-router-dom";

import './LeftSideBar.css';

const LeftSideBar = () => {
    return (
        <div className={'sideBar'}>
            <Link to={'/'}><h3>All genres</h3></Link>
            <Link to={'bygenre/28'}><p>Action</p></Link>
            <Link to={'bygenre/12'}><p>Adventure</p></Link>
            <Link to={'bygenre/16'}><p>Animation</p></Link>
            <Link to={'bygenre/35'}><p>Comedy</p></Link>
            <Link to={'bygenre/80'}><p>Crime</p></Link>
            <Link to={'bygenre/99'}><p>Documentary</p></Link>
            <Link to={'bygenre/18'}><p>Drama</p></Link>
            <Link to={'bygenre/10751'}><p>Family</p></Link>
            <Link to={'bygenre/14'}><p>Fantasy</p></Link>
            <Link to={'bygenre/36'}><p>History</p></Link>
            <Link to={'bygenre/27'}><p>Horror</p></Link>
            <Link to={'bygenre/10402'}><p>Music</p></Link>
            <Link to={'bygenre/9648'}><p>Mystery</p></Link>
            <Link to={'bygenre/10749'}><p>Romance</p></Link>
            <Link to={'bygenre/878'}><p>Science Fiction</p></Link>
            <Link to={'bygenre/10770'}><p>TV Movie</p></Link>
            <Link to={'bygenre/53'}><p>Thriller</p></Link>
            <Link to={'bygenre/10752'}><p>War</p></Link>
            <Link to={'bygenre/37'}><p>Western</p></Link>
        </div>
    );
};

export default LeftSideBar;