import { combineReducers, createStore } from 'redux'
import tvShowsReducer from '../redux/tvShows'
import moviesReducer from '../redux/movies'

const rootReducer = combineReducers({
    tvShows: tvShowsReducer,
    movies: moviesReducer
})

const store = createStore(rootReducer)

//store.subscribe(() => store.getState())

export default store
