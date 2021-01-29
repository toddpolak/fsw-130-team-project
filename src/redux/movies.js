//import { createStore } from 'redux'

export function addMovie(movie) {
    return {
        type: 'ADD_MOVIE',
        payload: movie
    }
}

export default function moviesReducer(movies = [], action) {
    switch (action.type) {
        case 'ADD_MOVIE':
            return movies = [...movies, action.payload]
        default: 
            return movies
    }
}

/*
const store = createStore(moviesReducer)

store.subscribe(() => store.getState())

export default store
*/