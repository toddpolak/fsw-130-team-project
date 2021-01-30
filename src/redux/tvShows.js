export function addTvShow(tvShow) {
    return {
        type: 'ADD_TV_SHOW',
        payload: tvShow
    }
}

export function deleteTvShow(index) {
    return {
        type: 'DELETE_TV_SHOW',
        payload: index
    }
}

export default function tvShowsReducer(tvShows = [], action) {
    switch (action.type) {
        case 'ADD_TV_SHOW':
            return  tvShows = [...tvShows, action.payload]
        case 'DELETE_TV_SHOW':
            const updatedTvShows = tvShows.filter((tvShow, index) => index !== action.payload)

            return tvShows = updatedTvShows
        default:
            return tvShows
    }
}
