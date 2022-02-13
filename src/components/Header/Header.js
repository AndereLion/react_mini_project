import React, {useState} from 'react';
import {Link} from "react-router-dom";

import './Header.css';

const Header = () => {

    const switchTheme = () => {
        let app = document.getElementById("app");
        app.classList.toggle('app-light');
        let wrapOutletAndHeader = document.getElementById("wrapOutletAndHeader");
        wrapOutletAndHeader.classList.toggle('wrapOutletAndHeader-light');
        let sideBarL = document.getElementById("sideBar");
        sideBarL.classList.toggle('sideBar-light');
        let sideBarR = document.getElementById("rightSideBar");
        sideBarR.classList.toggle('rightSideBar-light');
        let header = document.getElementById("header");
        header.classList.toggle('header-light');
        let toPageForm = document.getElementById("toPageForm");
        toPageForm.classList.toggle('toPageForm-light');
        let allPosters = document.getElementById("allPosters");
        allPosters.classList.toggle('allPosters-light');


    };
    const [word, setWord] = useState('');

    return (
        <div id={'header'} className={'header'}>

            <div className={'headerForm'}>
                <form onClick={() => {
                    setWord('')
                }}>
                    <Link to={'byword/' + word}>
                        <button type="submit">Find</button>
                    </Link>
                    <input className={'inputForPages'} type="text" value={word}
                           onChange={(e) => {
                               setWord(e.target.value);
                           }}
                           placeholder={'Search your interesting...'}/>
                    <button onClick={(e) => {
                        e.preventDefault();
                        switchTheme()
                    }
                    }>Dark / Light
                    </button>
                </form>


            </div>
        </div>
    );
};

export default Header;