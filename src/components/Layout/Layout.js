import React from 'react';
import {Outlet} from "react-router-dom";

import './Layout.css'
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import Header from "../Header/Header";
import RightSideBar from "../RightSideBar/RightSideBar";

const Layout = () => {
    return (
        <div className={'layout'}>
            <LeftSideBar/>
            <div className={'wrapOutletAndHeader'}>
                <Header/>
                <Outlet/>
            </div>
            <RightSideBar/>
        </div>
    );
};

export default Layout;