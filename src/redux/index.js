import { createStore } from 'redux'
import moviesReducer from '../redux/movies'

const store = createStore(moviesReducer)

store.subscribe(() => store.getState())

export default store

/*
const redux = require("redux")
const { combineReducers, createStore } = redux
const tvShows = require('./tvShows')
const movies = require('./movies')

const rootReducer = combineReducers({
    tvShows: tvShows.tvShowsReducer,
    movies: movies.moviesReducer
})

const store = createStore(rootReducer)

module.exports = store
*/
