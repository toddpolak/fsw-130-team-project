import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTvShow } from '../redux/tvShows'

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
            <div>
                {store.tvShows.map((tvShow, index) =>
                    <div key={index}>{tvShow.title}</div>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return { store: state }
}

export default connect(mapStateToProps)(TvShows)
