import React, {useState} from 'react';
import {Link} from "react-router-dom";

import './Header.css';

const Header = () => {
    const [word, setWord] = useState('');

    return (
        <div className={'header'}>
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
                </form>

            </div>
        </div>
    );
};

export default Header;