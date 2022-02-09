import React from "react";
import {Route, Routes} from "react-router-dom";

import './App.css';
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import ByGenresPage from "./pages/ByGenresPage/ByGenresPage";
import ByWordPage from "./pages/ByWordPage/ByWordPage";
import UpcomingPage from "./pages/UpcomingPage/UpcomingPage";


function App() {

    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage homePage={1}/>}/>
                    <Route path={'moviedet/:id'} element={<MovieDetailsPage/>}/>
                    <Route path={'bygenre/:genre'} element={<ByGenresPage/>}/>
                    <Route path={'byword/:word'} element={<ByWordPage/>}/>
                    <Route path={'upcoming'} element={<UpcomingPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
