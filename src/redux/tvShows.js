export function addTvShow(tvShow) {
    return {
        type: 'ADD_TV_SHOW',
        payload: tvShow
    }
}

export function deleteTvShow(tvShow) {
    return {
        type: 'DELETE_TV_SHOW',
        payload: tvShow
    }
}

export default function tvShowsReducer(tvShows = [], action) {
    switch (action.type) {
        case 'ADD_TV_SHOW':
            return  tvShows = [...tvShows, action.payload]

        case 'DELETE_TV_SHOW':
            const updatedTvShows = tvShows.filter(tvShow => tvShow !== action.payload)
            return tvShows = updatedTvShows
        default:
            return tvShows
    }
}
