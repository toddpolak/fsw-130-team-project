import React from 'react'
import { Switch, Route } from "react-router-dom"
import NavBar from "../components/Navbar"
import Home from '../pages/Home'
import TvShows from '../pages/TvShows'
import Movies from '../pages/Movies'
import './App.css';

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/tvshows" component={TvShows}></Route>
                <Route path="/movies" component={Movies}></Route>
            </Switch>
        </div>
    )
}

export default App
