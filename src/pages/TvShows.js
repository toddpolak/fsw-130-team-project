import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTvShow, deleteTvShow } from '../redux/tvShows'

function TvShows({ dispatch, store }) {

    const initInput = {
        title: ''
    }

    const [input, setInput] = useState(initInput)

    function handleChange(e) {
        const { name, value } = e.target

        setInput(prevInput => ({ ...prevInput, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(addTvShow(input))
        setInput(initInput)
    }

    return (
        <div>
            <h1>TV Shows Page</h1>
            <h3>Project 3: Movies & TV with Redux (React)</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='title'
                    value={input.title}
                    onChange={handleChange}
                    placeholder='TV Show' />
                <button>Add</button>
            </form>
            <div className='display-list'>
                {store.tvShows.map((tvShow, index) =>
                    <div key={index}>
                        <div>{tvShow.title}</div>
                        <div>
                            <button onClick={() => {dispatch(deleteTvShow(index))}}>
                                    Delete
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return { store: state }
}

export default connect(mapStateToProps)(TvShows)
