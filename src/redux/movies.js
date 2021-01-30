export function addMovie(movie) {
    return {
        type: 'ADD_MOVIE',
        payload: movie
    }
}

export function deleteMovie(index) {
    return {
        type: 'DELETE_MOVIE',
        payload: index
    }
}

export default function moviesReducer(movies = [], action) {
    switch (action.type) {
        case 'ADD_MOVIE':
            return movies = [...movies, action.payload]
        case 'DELETE_MOVIE':
            const updatedMovies = movies.filter((movie, index) => index !== action.payload)
            return movies = updatedMovies
        default: 
            return movies
    }
}
