export function addMovie(movie) {
    return {
        type: 'ADD_MOVIE',
        payload: movie
    }
}

export function deleteTvMovie(movie) {
    return {
        type: 'DELETE_MOVIE',
        payload: movie
    }
}

export default function moviesReducer(movies = [], action) {
    switch (action.type) {
        case 'ADD_MOVIE':
            return movies = [...movies, action.payload]
        case 'DELETE_MOVIE':
            const updatedMovies = movies.filter(movie => movie !== action.payload)
            return movies = updatedMovies
        default: 
            return movies
    }
}
